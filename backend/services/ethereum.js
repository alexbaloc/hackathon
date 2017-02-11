
var _ = require('lodash');
var Web3 = require('web3');

var coinbase = {
        walletNo: 0,
        password: "test"
};

var web3 = new Web3();

//wrapper for all exposed methods
var eth = {};
eth.setup = function() {
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
}

eth.ensureFunds = function(account) {
    var wallet = web3.eth.accounts[account.eth.walletNo];
    if (wallet == undefined) {
        console.error('account ' + account.name + ' does not have an ethereum wallet: no ' + account.eth.walletNo);
        return;
    }

    var balance = web3.eth.getBalance(wallet).toNumber();
    console.log('address ' + wallet + ' has ' + balance);
    if (balance < web3.toWei(2, 'ether')) 
    {
        var coinbaseAddress = web3.eth.accounts[coinbase.walletNo];
        web3.personal.unlockAccount(coinbaseAddress, coinbase.password);
        web3.eth.sendTransaction({from: coinbaseAddress, to: wallet, value: web3.toWei(2, "ether")})
    }
}

eth.getweb3 = function() {
    return web3;
}


module.exports = eth;
