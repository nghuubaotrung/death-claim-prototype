import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.policiesManagementComponent.helpers({
  //契約情報の取得
  policies: function(){
    return [
      {
        "name": "Policy 1",
        "policy_holder": "AAA 様",
        "hospital": "死亡保険その1",
        "insurer": "AAA 生命保険会社",
        "address": "0xa12e5a79d1746501d4c6a2a92c1e49bcb5a487ec",
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
        "hospital": "死亡保険その2",
        "insurer": "AAA 生命保険会社",
        "address": "0x76ad8408304d3447f1b54ae3a945b519fd847596",
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
        "hospital": "死亡保険その3",
        "insurer": "AAA 生命保険会社",
        "address": "0x076f8d5eefbfd95cb452831007575534252265bf",
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
