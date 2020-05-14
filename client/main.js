import '../imports/ui/layout.js';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Meteor.subscribe('imgGallery');

Tracker.autorun(() => {
	if (!Meteor.userId())
		FlowRouter.go("index");
});