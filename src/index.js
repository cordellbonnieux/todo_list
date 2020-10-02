// import scripts
import {populate} from './populate.js';
import {projectList} from './newProject.js';
import {addProject} from './newProject.js';
import {cancelOverlay} from './overlay.js';
import {tasks} from './tasks.js';
// run imported scripts
populate();
addProject();
cancelOverlay();
tasks(projectList);
// run stylesheet
import css from './style.css';