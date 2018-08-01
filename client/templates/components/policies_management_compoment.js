import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.policiesManagementComponent.helpers({
  //契約情報の取得
  policies: function(){
    return [1, 2, 3];
  }
});

//Metamask利用したadminアカウント
Template.policiesItem.helpers({
  //アカウントの名前の取得
  name: function(){
    return "Admin Account (Metamask)";
  },
  //アカウントのアドレスの取得
  address: function(){
    return "0x65f75f39efa72d0bf423ff0241c22d02d058b9d3";
  },
  //アカウントが持つEtherの残高を取得（単位はEtherで、小数点３ケタまで取得）
  status: function(){
    return "check button";
  }
});
