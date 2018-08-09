import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.policiesManagementComponent.helpers({
  //契約情報の取得
  policies: function(){
    return [
      {
        "name": "Policy 1",
        "policy_holder": "AAA 様",
        "hospital": "AAA 病院",
        "insurer": "AAA 生命保険会社",
        "address": "0x9f81dc312fa1966ab2675cc88bdb7d9e42687f77",
        "abi": [
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
      },
      {
        "name": "Policy 2",
        "policy_holder": "BBB 様",
        "hospital": "AAA 病院",
        "insurer": "AAA 生命保険会社",
        "address": "0x16ec46375b2b77098991e62c5e6559f3c797fca2",
        "abi": [
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
      },
      {
        "name": "Policy 3",
        "policy_holder": "BBB 様",
        "hospital": "AAA 病院",
        "insurer": "AAA 生命保険会社",
        "address": "0xa54837698a4caa492f9dc46230d4cef2df521d53",
        "abi": [
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
      }
    ]
  }
});

Template.policiesItem.helpers({
  name: function(){
    return this.name;
  },
  policy_holder: function(){
    return this.policy_holder;
  },
  hospital: function(){
    return this.hospital;
  },
  insurer: function(){
    return this.insurer;
  },
  address: function(){
    return this.address;
  },
});

Template.policiesItem.events({
  //証券のステータスの確認
  'click': function(){
    console.log("Policy ID:" + this.address);

    var contractAddress = this.address;
    var abi = this.abi;

    myContract = web3.eth.contract(abi).at(contractAddress);
    myContract.s(function(error, result){
      console.log(result);
      alert(result);
      if(result == "patient was pronounced dead"){
        document.getElementById(contractAddress).setAttribute("class", "btn btn-danger");
      } else {
        document.getElementById(contractAddress).setAttribute("class", "btn btn-success");
      }
    })
  }
});
