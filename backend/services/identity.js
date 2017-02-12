
var _ = require('lodash');

var accounts = [
    {
        name: "Cegeka",
        eth: {
            walletNo: 1,
            password: "test"
        },
        type: "company"
    },
    {
        name: "BMW",
        eth: {
            walletNo: 3,
            password: "test"
        },
        type: "company"
    },
    {
        name: "KPMG",
        eth: {
            walletNo: 4,
            password: "test"
        },
        type: "company"
    },
    {
        name: "Alex",
        email: "alex@local.com",
        eth: {
            walletNo: 2,
            password: "test"
        },
        type: "user"
    }
];

var findAccount = function(name, type) {
    return _.find(accounts, function(acc) {
        var isRightType = typeof type === 'undefined' || acc.type === type;
        var isRightName = typeof name === 'undefined' || name.toLowerCase() === acc.name.toLowerCase();
        return isRightType && isRightName;
    } );
}

var identity = {};



identity.getAccount = function(id) {
    return accounts[id];
}

identity.getByNameAndType = function(name, type) {
    return findAccount(name, type);
}

identity.getByName = function(name) {
    return findAccount(name);
}

//There's only one user in our system, so return it
identity.getUser = function() {
    return findAccount(undefined, 'user');
}

module.exports = identity;
