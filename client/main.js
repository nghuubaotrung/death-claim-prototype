import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
hello_contract_address = "0x5f60fab5f44db33a4c88c51b369ba0e90c3861a9";
bonjour_contract_address = "0x71cddcb95278c192987fec624a7a00ea0c237293";
hello_abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "bonjourAddress",
				"type": "address"
			}
		],
		"name": "callBonjuor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "callBonjuors",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adList",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "contractAddress",
				"type": "address"
			}
		],
		"name": "addContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tmpAdList",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "listLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

bonjour_abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "hellowAddress",
				"type": "address"
			}
		],
		"name": "registerBonjour",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "notifyCall",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "s",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "clearString",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
]

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {

    //return Template.instance().counter.get();

    var template = Template.instance();
    var account_address = "0x65f75f39efa72d0bf423ff0241c22d02d058b9d3";
    web3.eth.getBalance(account_address, function(error, result){
      TemplateVar.set(template, "balance", result);
    });
    TemplateVar.set(template, "account_address", account_address);

    myContract = web3.eth.contract(hello_abi).at(hello_contract_address);
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
  },
});
