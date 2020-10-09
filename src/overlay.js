import {mouseHover} from './newProject.js';
export function cancelOverlay(){
    cancel.addEventListener("click", function(){
        overlayBox.innerHTML = "";
        overlay.style.display = "none";
    })
    mouseHover(cancel);
}
//
const cancel = document.getElementById("cancel");
const overlay = document.getElementById("overlayWrapper");
const overlayBox = document.getElementById('overlayBox');
// get all possible wrappers
const taskWrap = document.getElementById('newTaskWrapper');
const projWrap = document.getElementById('newProjectWrapper');
const editProjWrap = document.getElementById('editProjectWrapper');