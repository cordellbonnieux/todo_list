import {mouseHover} from './newProject.js';
export function cancelOverlay(){
    const cancel = document.getElementById("cancel");
    const overlay = document.getElementById("overlayWrapper");
    // 'x' to hide overlay
    cancel.addEventListener("click", function(){
        overlay.style.display = "none";
        // exit out all other displays -- below needs to be improved
        //const taskWrap = document.getElementById('newTaskWrapper');
            //taskWrap.style.display = "none";
        //const projWrap = document.getElementById('newProjectWrapper');
            //projWrap.style.display = "none";
        //const editProjWrap = document.getElementById('editProjectWrapper');
            //editProjWrap.style.display = "none";
    })
    mouseHover(cancel);
}