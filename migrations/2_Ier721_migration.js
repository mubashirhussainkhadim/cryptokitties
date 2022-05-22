const Token = artifacts.require("kittycontract");

module.exports = function (deployer) {
    deployer.deploy(Token);
};
