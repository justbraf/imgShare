Template.myGallery.helpers({
	allImages(){
		//get time 15 seconds ago
		var prevTime = new Date().getTime() - 15000;
		//count how many records are younger than fifteen seconds
		var results = imagesdb.find({createdOn: {$gte: prevTime}}).count();
		if (results > 0){
			return imagesdb.find({}, {sort:{createdOn: -1, ratings: -1}, limit: Session.get("imageLimit")});
		}
		else {
			return imagesdb.find({}, {sort:{ratings: -1, createdOn: -1}, limit: Session.get("imageLimit")});
		}
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

Template.myGallery.events({
	'click .js-delete'(event, instance) {
		// console.log("deleting...");
		var myId = this._id;
		if ((this.createdById == undefined) || (this.createdById == Meteor.userId())){
			$("#deleteId").val(myId);
			$("#confirmModal").modal("show");
		}
		else {
			alert("You don't have permission to delete that.");
		}
	},
	'click .js-edit'(event, instance){
		$("#editImageModal").modal("show");
		var myId = this._id;
		// console.log("let's edit "+myId);
		var eTitle = imagesdb.findOne({_id: myId}).title;
		var ePath = imagesdb.findOne({_id: myId}).path;
		var eDesc = imagesdb.findOne({_id: myId}).desc;
		$("#editId").val(myId);
		$("#editTitle").val(eTitle);
		$("#editPath").val(ePath);
		$("#editDesc").val(eDesc);
		$(".editHolder").attr("src", ePath);
	},
	'click .js-confirm'(event, instance){
		var myId = $("#deleteId").val();
		$("#"+myId).fadeOut('slow',function(){
			imagesdb.remove({_id:myId});
			// console.log(myId);
		});
	},
	'click .rating'(event, instance) {
		// if (Meteor.userId()){
			var myId = this.picId;
			const value = $(event.target).val();
			// console.log(myId+" : "+value);
			imagesdb.update({_id: myId},
				{$set:{
					"ratings": value
				}}
			);
		}
	// }
});