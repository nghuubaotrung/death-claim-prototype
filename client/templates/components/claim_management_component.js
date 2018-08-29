import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.claimManagementComponent.helpers({
  //契約情報の取得
  policies: function(){
    return [
      {
        "name": "信岡良彦",
        "policy_holder": "AAA 様",
        "hospital": "AAA 病院",
        "insurer": "死亡保険その1",
        "address": "東京都練馬区",
        "birth": "1978-12-??",
        "sex": "男",
        "death_date": "2018-09-06",
      },
      {
        "name": "Frank",
        "policy_holder": "BBB 様",
        "hospital": "AAA 病院",
        "insurer": "死亡保険その1",
        "address": "0x76ad8408304d3447f1b54ae3a945b519fd847596"
      },
      {
        "name": "Rob",
        "policy_holder": "BBB 様",
        "hospital": "AAA 病院",
        "insurer": "死亡保険その3",
        "address": "東京都渋谷区"
      }
    ]
  }
});

Template.claimItem.helpers({
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

Template.claimItem.events({
  //証券のステータスの確認
  'click': function(){
    console.log("Policy ID:" + this.address);

    var policyContractAddress = this.address;
    // var policyABI = this.abi;

    var policyControllerAddress = "0xd4fe9170ff3241096f6cf1679c31159586cd3ac4";
    var policyControllerABI = [
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
    ];

    //実行ユーザの設定
    web3.eth.defaultAccount = web3.eth.accounts[0]
    // ユーザのunlock
    web3.personal.unlockAccount(web3.eth.accounts[0], "123123123", 150000)

    policyController = web3.eth.contract(policyControllerABI).at(policyControllerAddress);
    policyController.callBonjuor.sendTransaction(policyContractAddress, {
        from:web3.eth.accounts[0],
        gas:4000000},function (error, result){ // gas priceをあげたの方実行が早い
          if(!error){
            // Transaction IDを表示する
            console.log("Transaction ID: " + result);
          } else{
            console.log(error);
          }
        });
  },
});
