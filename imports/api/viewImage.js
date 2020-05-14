import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.viewImage.helpers({
	viewImg(){
		// console.log("The id is",FlowRouter.getParam("_id"));
		return imagesdb.findOne({_id: FlowRouter.getParam("_id")});
	},
	userField(){//check to see if image has a saved user
		if (!(this.createdBy == undefined)){
			return true;
		}
		else {
			return false;
		}
	}
});