Router.configure({
  //Layoutテンプレートの指定
  layoutTemplate: 'systemLayout'
});

Router.route('/', function () {
  //リダイレクト設定
  this.redirect('/dashboard');
});

//URLとRouteテンプレートのマッピングを指定
Router.route('/dashboard', {name: 'dashboard'});
Router.route('/insurances', {name: 'insurances'});
Router.route('/hospitals', {name: 'hospitals'});
