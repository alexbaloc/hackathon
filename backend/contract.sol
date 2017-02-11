
contract PensionFund {
    address company;
    string companyName;
    
    address owner;
    string employeeName;

    enum Type {
        Start,
        Change,
        End
    }

    struct EventEntry {
        uint date;
        Type eventType;
        string employer;
        address employerAddress;
        
        uint salary;
        uint franchiseAmount;
        uint accrualRate;
    }
    
    EventEntry[] events;
    uint eventsNo;
    
    modifier onlyEmploee(){ if (msg.sender == owner) _; }
    modifier onlyCompany(){ if (msg.sender == company) _; }

    function PensionFund(address _owner, string _employeeName, string _companyName,
        uint date, uint salary, uint franchise, uint accrual) public {
        company = msg.sender;
        companyName = _companyName;
        
        owner = _owner;
        employeeName = _employeeName;
        
        addState(date, salary, franchise, accrual, Type.Start);
    }
    
    /*
    function changeParameters(uint _added, uint _accrual) public onlyCompany {
        events[eventsNo].status = Status.Changed;
        addState(_added, _accrual, Status.Active);
    }
    */
    
    function close(uint date) public onlyCompany {
        addState(date, 0, 0, 0, Type.End);
        
        company = 0x0;
        companyName = "";
    }


    
    function addState(uint date, uint salary, uint franchise, uint accrual, 
        Type status) private {
        events.push(EventEntry(date, status, companyName, company, salary, 
            franchise, accrual));
        eventsNo++;
    }
    
    function getCount() constant public returns (uint) {
        return eventsNo;
    }
    
    function getEventById(uint index) constant public returns (uint, Type, string, uint, uint, uint) {
        EventEntry entry = events[index];
        return (entry.date, entry.eventType, entry.employer, entry.salary, entry.franchiseAmount, entry.accrualRate);
    }
}
