
contract PensionFund {
    address company;
    address owner;

    struct EventEntry {
        uint added;
        uint accrual;
    }
    
    EventEntry[] events;
    uint eventsNo;

    function PensionFund(address _owner, uint _added, uint _accrual) public {
        company = msg.sender;
        owner = _owner;
        
        addState(_added, _accrual);
    }
    
    function addState(uint _added, uint _accrual) private {
        events.push(EventEntry(_added, _accrual));
        eventsNo++;
    }
    
    function getCount() constant public returns (uint) {
        return eventsNo;
    }
    
    function getEventById(uint index) constant public returns (uint, uint) {
        return (events[index].added, events[index].accrual);
    }
}
