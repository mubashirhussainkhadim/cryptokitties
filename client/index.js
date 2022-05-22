var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xf11b3b85c789Ee2C1AD042213DDe944E68f1d411";
var contractOwner;
$(document).ready(function () {
    window.ethereum.enable().then(function (accounts) {
        instance = new web3.eth.Contract(abi, contractAddress, { from: accounts[0] });
        instance.methods.owner().call().then(test => {
            contractOwner = test;
        });
        user = accounts[0];

        console.log(instance);

    })
})

function createKitty() {
    var kittyDna = getDna();
    instance.methods.createKittyGen0(kittyDna).send({}, function (err, txHash) {
        if (err) {
            console.log(err);
        } else {
            alert("Transaction sent!");
            console.log(txHash);
            instance.events.Birth().on('connected', function (subscriptionId) {
                console.log(subscriptionId);
            })
                .on('error', function (error) {
                    console.log(error);
                    alert("Kitty Birth failed");
                })
                .on('data', function (event) {
                    alert(`Kitty birth successful! \n
                Kitty Owner: ${event.returnValues.owner}\n
                Kitty ID: ${event.returnValues.kittenId}\n
                Mommy Cat: ${event.returnValues.mumId}\n
                Daddy Cat: ${event.returnValues.dadId}\n
                Kitty Genes: ${event.returnValues.genes}
                `)
                })
        }
    })
}

async function myKitties() {
    var arrayId = await instance.methods.tokens
}
$('#create').click(() => {
    createKitty(getDna());
})