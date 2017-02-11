
var allEvents = [
    {
        action: 'create',
        company: 'cegeka',
        data:  {
            startDate: new Date('1-04-2013 12:00:00'),
            salary: 45000,
            franchise: 13500,
            accrual: 1875
        }
    },

    {
        action: 'close',
        company: 'cegeka',
        data: new Date('12-31-2016 12:00:00')
    },

    {
        action: 'restart',
        company: 'bmw',
        data:  {
            startDate: new Date('1-01-2017 12:00:00'),
            salary: 85000,
            franchise: 13500,
            accrual: 1200
        }
    },

    {
        action: 'close',
        company: 'bmw',
        data: new Date('10-15-2017 12:00:00')
    },

    {
        action: 'restart',
        company: 'cegeka',
        data:  {
            startDate: new Date('10-01-2018 12:00:00'),
            salary: 105000,
            franchise: 13500,
            accrual: 1400
        }
    }
];

var params = {};
params.getAt = function(index) {
    return allEvents[index];
}

module.exports = params;