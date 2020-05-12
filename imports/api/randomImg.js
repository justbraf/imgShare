import { Random } from 'meteor/random';

uniqueNumber =function(){
	var n;
	n = Math.floor(Random.fraction()*imagesdb.find().count());
	return n;
}

Template.randomImg.helpers({
	randImg(){
		return imagesdb.find().fetch()[uniqueNumber()];
	}
});