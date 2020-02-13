import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this is the default BS theme as example
import popper from 'popper.js'
global.Popper = popper // fixes some issues with Popper and Meteor

import './main.html';
import '../lib/collection.js';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// increment the counter when button is clicked
    // instance.counter.set(instance.counter.get() + 1);
// });

Template.myGallery.helpers({
  allImages(){
  	return imagesdb.find();
  },
});

Template.myGallery.events({
  'click .js-delete'(event, instance) {
  	// console.log("deleting...");
  	var myId = this._id;
  	$("#"+this._id).fadeOut('slow',function(){
  		imagesdb.remove({_id:myId});
  		console.log(myId);
  	});
  },
  
});

Template.addImage.events({
  'click .js-addImage'(event, instance){
    console.log("Open modal");
  },
  'click .js-exitAdd'(event, instance){
    console.log("closing modal");
    $("#imgTitle").val("");
    $("#imgPath").val("");
    $("#imgDesc").val("");
  },
  'click .js-saveImage'(event, instance){
    var theTitle = $("#imgTitle").val();
    var thePath = $("#imgPath").val();
    var theDesc = $("#imgDesc").val();
    // console.log("Saving Image with title: "+theTitle+" and its path is "+thePath+" and its description "+theDesc);
    imagesdb.insert({
      "title": theTitle,
      "path": thePath,
      "desc": theDesc
    });
    // imagesdb.insert({"title": theTitle, "path": thePath, "desc": theDesc});
    console.log("saving...");
    $("#addImageModal").modal("hide");
    $("#imgTitle").val("");
    $("#imgPath").val("");
    $("#imgDesc").val("");
  }
});