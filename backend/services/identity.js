
var _ = require('lodash');

var accounts = [
    {
        name: "Cegeka",
        email: "cegeka@test.com",
        ethWallet: 1,
        password: "test",
        type: "company"
    },
    {
        name: "Alex",
        email: "alex@local.com",
        ethWallet: 2,
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
