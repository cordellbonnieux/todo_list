export let projectList = [];
// import scripts
import {populate} from './populate.js';
import {addProject} from './newProject.js';
// run imported scripts
populate();
addProject();
// run stylesheet
import css from './style.css';