
var _ = require('lodash');
var solc = require('solc');
var fs = require('fs');

var ethereum = require('./ethereum');

//wrapper for all exposed methods
var contracts = {};
//COMMENT OUT
// contracts.existing = "0x6dd473a180fa0534ea95942df8a13ae08a0a1469";

var getContractCode = function () {
    if (!contracts.cachedContract) {

        var data = fs.readFileSync('contract.sol');
        var input = data.toString();

        var output = solc.compile(input, 1);

        contracts.cachedContract = output.contracts[':PensionFund'];
    }

    return contracts.cachedContract;
}

contracts.isContractCreated = function() {
    return contracts.existing != undefined;
}

contracts.cacheABI = function () {
    getContractCode();
}

var getExistingInstance = function () {
    if (!contracts.existing) {
        console.error("No contract mined");
        return;
    }

    var outputContract = getContractCode();
    var web3 = ethereum.getweb3();
    var contractTemplate = web3.eth.contract(JSON.parse(outputContract.interface));

    return contractTemplate.at(contracts.existing);
}


contracts.create = function (company, user, data) {

    var outputContract = getContractCode();
    var web3 = ethereum.getweb3();
    var contractTemplate = web3.eth.contract(JSON.parse(outputContract.interface));

    web3.personal.unlockAccount(web3.eth.accounts[company.eth.walletNo], company.eth.password);

    var _employee = web3.eth.accounts[user.eth.walletNo];
    var _employeeName = user.name;
    var _companyName = company.name;


    var contract = contractTemplate.new(_employee, _employeeName, _companyName, data.startDate.getTime(),
        data.salary, data.franchise, data.accrual,
        {
            from: web3.eth.accounts[company.eth.walletNo],
            data: '0x' + outputContract.bytecode,
            gas: '5000000'
        }, function (e, contract) {
            if (!e) {
                if (contract.address) {
                    console.log("Contract mined! Address: " + contract.address);
                    //save for later
                    contracts.existing = contract.address;
                }
            }
        });
}


contracts.close = function (company, user, date) {
    if (!contracts.existing) {
        console.error("No contract mined");
        return;
    }

    var outputContract = getContractCode();
    var web3 = ethereum.getweb3();
    var contractTemplate = web3.eth.contract(JSON.parse(outputContract.interface));
    var prevContractInstance = contractTemplate.at(contracts.existing);

    web3.personal.unlockAccount(web3.eth.accounts[company.eth.walletNo], company.eth.password);

    prevContractInstance.close(date.getTime(),
        {
            from: web3.eth.accounts[company.eth.walletNo],
            data: '0x' + outputContract.bytecode,
            gas: '5000000'
        }, function (e, tx) {
            if (!e) {
                console.log('closed instance', tx);
            }
        });
}


contracts.restart = function (company, user, data) {
    if (!contracts.existing) {
        console.error("No contract mined");
        return;
    }

    var outputContract = getContractCode();
    var web3 = ethereum.getweb3();
    var contractTemplate = web3.eth.contract(JSON.parse(outputContract.interface));
    var prevContractInstance = contractTemplate.at(contracts.existing);

    web3.personal.unlockAccount(web3.eth.accounts[company.eth.walletNo], company.eth.password);

    var _companyName = company.name;

    prevContractInstance.restart(_companyName, data.startDate.getTime(),
        data.salary, data.franchise, data.accrual,
        {
            from: web3.eth.accounts[company.eth.walletNo],
            data: '0x' + outputContract.bytecode,
            gas: '5000000'
        }, function (e, tx) {
            if (!e) {
                console.log('restart done', tx);
            }
        });
}

contracts.getParsedEvents = function () {
    var eventsList = contracts.getAllEvents();
    var curated = [];

    for (var i = 0; i < eventsList.length; i++) {
        var event = eventsList[i];
        if (event.type == 'Start' && i < eventsList.length - 1) {
            //check the next entry
            var nextEvent = eventsList[i + 1];
            if (nextEvent.type == 'Stop') {
                event.endDate = nextEvent.startDate;

                var dateDifference = new Date(event.endDate.getTime() - event.startDate.getTime());
                event.difference = dateDifference.getTime() / (1000 * 60 * 60);
                i++;
            }
        }

        curated.push(event);
    }

    return curated;
}

contracts.getAllEvents = function () {
    var prevContractInstance = getExistingInstance();
    if (!prevContractInstance) {
        return [];
    }
    var count = prevContractInstance.getCount();

    var data = [];
    for (var i = 0; i < count; i++) {
        var results = prevContractInstance.getEventById(i);

        var entry =
            {
                startDate: new Date(Number(results[0])),
                company: results[2],
                salary: results[3],
                franchise: results[4],
                accrual: Number(results[5]) / 1000
            };
        if (results[1] == '0') entry.type = 'Start';
        else entry.type = 'Stop';

        data.push(entry);
    }

    return data;
}

module.exports = contracts;
