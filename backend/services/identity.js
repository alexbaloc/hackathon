
var _ = require('lodash');

var coinbase = {
        walletNo: 0,
        address: "0x3b3cb9fe4e3e3ae8d874bbfc79c6f0933dd9b132",
        password: "test"
};

var accounts = [
    {
        name: "Cegeka",
        email: "cegeka@test.com",
        eth: {
            walletNo: 1,
            address: "0x3f00eadbf888651ff3f19d79b7d842078e64dacd",
            password: "test"
        },
        password: "test",
        type: "company"
    },
    {
        name: "Alex",
        email: "alex@local.com",
        eth: {
            walletNo: 2,
            address: "",
            password: "test"
        },
        password: "test"
    }
];

var findAccount = function(name, type) {
    return _.find(accounts, function(acc) {
        var isRightType = typeof type === 'undefined' || acc.type === type;
        return isRightType && (name.toLowerCase() === acc.name.toLowerCase());
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

module.exports = identity;
