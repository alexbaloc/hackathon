
var _ = require('lodash');
var Web3 = require('web3');

var coinbase = {
    walletNo: 0,
    address: "0x756226279bad45a5e36fb5d1756931ebe9e7eef8",
    password: "test"
};

var web3 = new Web3();

//wrapper for all exposed methods
var eth = {};
eth.setup = function () {
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
}

eth.ensureFunds = function (account) {
    var wallet = web3.eth.accounts[account.eth.walletNo];
    if (wallet == undefined) {
        console.error('account ' + account.name + ' does not have an ethereum wallet: no ' + account.eth.walletNo);
        return;
    }

    var balance = web3.eth.getBalance(wallet).toNumber();
    if (balance < 1) {
        web3.personal.unlockAccount(coinbase.address, coinbase.password);
        web3.eth.sendTransaction({ from: coinbase.address, to: wallet, value: web3.toWei(1, "ether") })
    }
}

eth.getweb3 = function () {
    return web3;
}


module.exports = eth;
