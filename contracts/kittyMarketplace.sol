pragma solidity ^0.8.0;

import "./IKittyMarketplace.sol";
import "./Ownable.sol";

contract KittyMarketplace is Ownable {
    Kittycontract kittyContract;
    event MarketTransaction(string TxType, address owner, uint256 tokenId);

    struct Offer {
        address seller;
        uint256 price;
        uint256 index;
        uint256 tokenId;
        bool active;
    }

    Offer[] public offers;
    mapping(uint256 => Offer) tokenIdToOffer;
    mapping(address => uint256) redeemableBalance;

    constructor(address _kittyContractAddress) {
        setKittyContract(_kittyContractAddress);
    }

    function setKittyContract(address _kittyContractAddress) public isOwner {
        kittyContract = Kittycontract(_kittyContractAddress);
    }

    function getOffer(uint256 _tokenId)
        external
        view
        returns (
            address seller,
            uint256 price,
            uint256 index,
            uint256 tokenId,
            bool active
        )
    {
        return _getOffer(_tokenId);
        require(active == true, "There is No Active Offer For this Kitty");
    }

    function _getOffer(uint256 _tokenId)
        internal
        view
        returns (
            address seller,
            uint256 price,
            uint256 index,
            uint256 tokenId,
            bool active
        )
    {
        seller = tokenIdToOffer[_tokenId].seller;
        price = tokenIdToOffer[_tokenId].price;
        index = tokenIdToOffer[_tokenId].index;
        tokenId = tokenIdToOffer[_tokenId].tokenId;
        active = tokenIdToOffer[_tokenId].active;
    }

    function getAllTokenOnSale()
        external
        view
        returns (uint256[] memory listOfOffers)
    {
        uint256 totalOffers = offers.length;
        if (totalOffers == 0) {
            return new uint256[](0);
        }

        uint256[] memory result = new uint256[](totalOffers);

        uint256 offerId;
        for (offerId = 0; offerId < totalOffers; offerId++) {
            if (offers[offerId].active == true) {
                result[offerId] = offers[offerId].tokenId;
            }
        }
        return result;
    }

    function setOffer(uint256 _price, uint256 _tokenId) external {
        require(kittyContract.ownerOf(_tokenId) == msg.sender);
        require(
            kittyContract.getApproved(_tokenId) == address(this) ||
                kittyContract.isApprovedForAll(
                    kittyContract.ownerOf(_tokenId),
                    address(this)
                ) ==
                true,
            "The Marketplace is not approved to sell this kitty"
        );
        _setOffer(_price, _tokenId);
        emit MarketTransaction("Create offer", msg.sender, _tokenId);
    }

    function _setOffer(uint256 _price, uint256 _tokenId) internal {
        if (tokenIdToOffer[_tokenId].active == false) {
            Offer memory _offer = Offer({
                seller: msg.sender,
                price: _price,
                index: offers.length,
                tokenId: _tokenId,
                active: true
            });

            tokenIdToOffer[_tokenId] = _offer;
            offers.push(_offer);
        } else {
            tokenIdToOffer[_tokenId].price = _price;
            tokenIdToOffer[_tokenId].active = true;
        }
    }

    function removeOffer(uint256 _tokenId) external {
        require(
            tokenIdToOffer[_tokenId].active == true,
            "There is no offer to remove for this kitty"
        );
        require(
            tokenIdToOffer[_tokenId].seller == msg.sender,
            "You are not the owner of that kitty"
        );
        _removeOffer(_tokenId);
        emit MarketTransaction("Remove offer", msg.sender, _tokenId);
    }

    function _removeOffer(uint256 _tokenId) internal {
        delete tokenIdToOffer[_tokenId];
        offers[tokenIdToOffer[_tokenId].index].active = false;
    }

    function buyKitty(uint256 _tokenId) external payable {
        Offer memory offer = tokenIdToOffer[_tokenId];
        require(offer.active == true, "This kitty is not for sale");
        require(
            msg.value >= tokenIdToOffer[_tokenId].price,
            "You sent less than the asking price"
        );
        require(msg.sender != offer.seller, "You can't buy your own kitty");

        delete tokenIdToOffer[_tokenId];
        offers[offer.index].active = false;

        redeemableBalance[offer.seller] += msg.value;

        kittyContract.transferFrom(offer.seller, msg.sender, _tokenId);

        emit MarketTransaction("Buy", msg.sender, _tokenId);
    }

    function redeem(uint256 _amount) external {
        require(
            _amount <= redeemableBalance[msg.sender],
            "You cannot Withdraw More than your redeemable balance are owed"
        );
        payable(msg.sender).transfer(_amount);
    }
}
