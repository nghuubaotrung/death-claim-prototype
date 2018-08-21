pragma solidity ^0.4.24;

//import "https://github.com/OretachiBlockChainTeam/OretachiNoPOC/PersonIF.sol" ;
import "https://github.com/OretachiBlockChainTeam/OretachiNoPOC/ContractIF.sol";

contract PersonIF{
    function addContract(address contractAddress) public payable;
}

contract BonjourWorld is ContractIF{
    string public s = 'patient is still alive';

    function notifyCall() payable{
        s = 'patient was pronounced dead';
    }

    function clearString() payable{
        s = 'patient is still alive';
    }

    function registerBonjour(address hellowAddress) public payable{
        PersonIF person = PersonIF(hellowAddress);
        person.addContract(this);
    }
}
