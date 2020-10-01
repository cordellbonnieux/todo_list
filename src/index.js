// import scripts
import {populate} from './populate.js';
import {projectList} from './newProject.js'; // will need for tasks
import {addProject} from './newProject.js';
import {cancelOverlay} from './overlay.js';
// run imported scripts
populate();
addProject();
cancelOverlay();
// run stylesheet
import css from './style.css';