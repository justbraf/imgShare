import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import 'meteor/jkuester:blaze-bs4';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // this is the default BS theme as example
import popper from 'popper.js';
global.Popper = popper // fixes some issues with Popper and Meteor

//ui templates
import './layout.html';
import './myGallery.html';
import './addImage.html';
import './editImage.html';
import './navBar.html';
import './banner.html';
import './randomImg.html';
import './error404.html';
import './viewImage.html';
import './about.html';
import './login.html';

//api scripts
import '../../lib/collection.js';
import '../../lib/accounts-ui.js';
import '../api/infiniteScroll.js';
import '../api/myGallery.js';
import '../api/addImage.js';
import '../api/editImage.js';
import '../api/router.js';
import '../api/randomImg.js';
import '../api/viewImage.js';