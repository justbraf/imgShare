import { Random } from 'meteor/random';

uniqueNumber = function(){
	var n = Math.floor(Random.fraction()*imagesdb.find().count());
	return n;
}

Template.randomImg.helpers({
	randImg(){
		return imagesdb.find().fetch()[uniqueNumber()];
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