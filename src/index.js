// import scripts
import {populate} from './populate.js';
import {projectList} from './newProject.js';
import {addProject} from './newProject.js';
import {cancelOverlay} from './overlay.js';
import {populateTasksArea} from './tasks.js';
import {createNewTask} from './tasks.js';
// run imported scripts
populate();
addProject();
cancelOverlay();

// run stylesheet
import css from './style.css';