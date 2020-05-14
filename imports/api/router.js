import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.container');
// https://medium.com/@satyavh/using-flow-router-for-authentication-ba7bb2644f42

Accounts.onLogin(function(){
	redirect = Session.get("redirectAfterLogin");
	if (redirect){
		if (redirect != "login")
			Meteor.logoutOtherClients();
			FlowRouter.go(redirect);
	}
});

Accounts.onLogout(function(){
	
	Session.set("redirectAfterLogin", FlowRouter._current.path);
	// if (redirect){
		// if (redirect != "login")
			FlowRouter.go("index");
	// }
});

const normal = FlowRouter.group();

const loggedIn = FlowRouter.group({
	// prefix: '/gallery',
	triggersEnter:[
		function(context, redirect){
			if (!Meteor.userId()){
				if (context.route.name != "login")
					Session.set("redirectAfterLogin", context.path);
				redirect('login');
			}
		}
	]
});

normal.route('/', {
	name: 'index',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {header: "banner", mainBody: "randomImg"});
		console.log("home page");
	}
});

normal.route('/login', {
	name: 'login',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {header: "banner"});
		console.log("login page");
	}
});
 loggedIn.route('/logout', {
 	name: 'logout',
 	action(){
 		Meteor.logout(FlowRouter.go('login'));
 	}
 });

loggedIn.route('/gallery', {
	name: 'gallery',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {header:"banner", mainBody: "myGallery"});
		console.log("the gallery of pictures");
	}
});

loggedIn.route('/view/:_id', {
	name: 'viewImage',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {header:"banner", mainBody: "viewImage"});
		console.log("view indiviudal image");
	}
});

FlowRouter.route('*', {
	name: '404',
	action(params, queryParams) {
		BlazeLayout.render("pageLayout", {mainBody: "error404"});
	}
});