
var _ = require('lodash');
var solc = require('solc');
var fs = require('fs');

var ethereum = require('./ethereum');

//wrapper for all exposed methods
var contract = {};

contract.create = function(company, user) {

    var data = fs.readFileSync('contract.sol');
    var input = data.toString();

    var output = solc.compile(input, 1);

    var outputContract = output.contracts[':PensionFund'];

    var web3 = ethereum.getweb3();
    var contractTemplate = web3.eth.contract(JSON.parse(outputContract.interface));

    web3.personal.unlockAccount(web3.eth.accounts[0], "test");

    var contract = contractTemplate.new("0x123", 5, 6, {
        from: web3.eth.accounts[0], 
        data: '0x' + outputContract.bytecode, 
        gas: '4700000'
    }, function(e, contract){
        if(!e) {

            if(!contract.address) {
                console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

            } else {
                console.log("Contract mined! Address: " + contract.address);
                console.log(contract);
            }
        }
    });
    
}



module.exports = contract;
