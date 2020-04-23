Template.editImage.events({
	'click .js-updateImage'(event, instance){
		var newTitle = $("#editTitle").val();
		var newPath = $("#editPath").val();
		var newDesc = $("#editDesc").val();
		var updateId = $("#editId").val();
		console.log("updating "+updateId+" Image with title: "+newTitle+" and its path is "+newPath+" and its description "+newDesc);
		imagesdb.update({_id: updateId},
			{$set:{
				"title": newTitle,
				"path": newPath,
				"desc": newDesc
			}}
		);
	},
	'input #editPath'(event, instance){
		$(".placeHolder").attr("src",$("#editPath").val());
	}
});