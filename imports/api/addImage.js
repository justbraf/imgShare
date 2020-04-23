Template.addImage.events({
	'click .js-addImage'(event, instance){
		console.log("Open modal");
	},
	'click .js-exitAdd'(event, instance){
		console.log("closing modal");
		$("#imgTitle").val("");
		$("#imgPath").val("");
		$("#imgDesc").val("");
		$(".placeHolder").attr("src","imgPlaceHolder.png");
	},
	'click .js-saveImage'(event, instance){
		var theTitle = $("#imgTitle").val();
		var thePath = $("#imgPath").val();
		var theDesc = $("#imgDesc").val();
		// console.log("Saving Image with title: "+theTitle+" and its path is "+thePath+" and its description "+theDesc);
		imagesdb.insert({
			"title": theTitle,
			"path": thePath,
			"desc": theDesc,
			"createdOn": new Date().getTime(),
			"createdBy": Meteor.users.findOne({_id:Meteor.userId()}).emails[0].address,
			"createdById": Meteor.userId()
		});
		// imagesdb.insert({"title": theTitle, "path": thePath, "desc": theDesc});
		// console.log("saving...");
		$("#addImageModal").modal("hide");
		$("#imgTitle").val("");
		$("#imgPath").val("");
		$("#imgDesc").val("");
	},
	'input #imgPath'(event, instance){
		$(".placeHolder").attr("src",$("#imgPath").val());
	}
});