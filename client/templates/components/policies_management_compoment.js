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
        "address": "0x39ea0c628e7511e756539147cf74e472a23090b6",
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
        ],
        "policy_number": "56781234",
        "product_code": "TP",
        "owner_name": "株式会社セリオテック",
        "LA_name": "Frank Eijsink",
        "birth": "1973/03/XX",
        "sex": "男",
      },
      {
        "name": "Policy 2",
        "policy_holder": "BBB 様",
        "hospital": "死亡保険その2",
        "insurer": "AAA 生命保険会社",
        "address": "0x68ddab9401c1f3b1f94cddd01314e066884a5e64",
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
        ],
        "policy_number": "87654321",
        "product_code": "TU",
        "owner_name": "平和酒造株式会社",
        "LA_name": "信岡良彦",
        "birth": "1977/12/XX",
        "sex": "男",
      },
      {
        "name": "Policy 3",
        "policy_holder": "BBB 様",
        "hospital": "死亡保険その3",
        "insurer": "AAA 生命保険会社",
        "address": "0x08346f3c58d1562d41d320060bfa8f58b4709b3a",
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
        ],
        "policy_number": "12345678",
        "product_code": "TP",
        "owner_name": "平和酒造株式会社",
        "LA_name": "信岡良彦",
        "birth": "1977/12/XX",
        "sex": "男",
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
      if(result == "被保険者が死亡しました。"){
        document.getElementById(contractAddress).setAttribute("class", "btn btn-danger");
      } else {
        document.getElementById(contractAddress).setAttribute("class", "btn btn-success");
      }
    })
  }
});
