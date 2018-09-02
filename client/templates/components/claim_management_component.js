import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.claimManagementComponent.helpers({
  //契約情報の取得
  policies: function(){
    return [
      {
        "name": "Frank Eijsink",
        "address": "東京都練馬区",
        "birth": "1973/03/XX",
        "sex": "男",
        "death_date": "",
        "smart_contract_address": "0xa12e5a79d1746501d4c6a2a92c1e49bcb5a487ec",
      },
      {
        "name": "信岡良",
        "address": "東京都練馬区",
        "birth": "1977/12/XX",
        "sex": "男",
        "death_date": "2018/09/06",
        "smart_contract_address": "0x76ad8408304d3447f1b54ae3a945b519fd847596",
      },
      {
        "name": "Rob Beattie",
        "address": "東京都渋谷区",
        "birth": "1971/11/XX",
        "sex": "男",
        "death_date": "",
        "smart_contract_address": "",
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

    if (policyContractAddress = "0x76ad8408304d3447f1b54ae3a945b519fd847596") {
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

      policyController.callBonjuor.sendTransaction("0x076f8d5eefbfd95cb452831007575534252265bf", {
          from:web3.eth.accounts[0],
          gas:4000000},function (error, result){ // gas priceをあげたの方実行が早い
            if(!error){
              // Transaction IDを表示する
              console.log("Transaction ID: " + result);
            } else{
              console.log(error);
            }
        });
    } else {
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
    }
    // policyController.callBonjuor.sendTransaction(policyContractAddress, {
    //     from:web3.eth.accounts[0],
    //     gas:4000000},function (error, result){ // gas priceをあげたの方実行が早い
    //       if(!error){
    //         // Transaction IDを表示する
    //         console.log("Transaction ID: " + result);
    //       } else{
    //         console.log(error);
    //       }
    //     });
  },
});
