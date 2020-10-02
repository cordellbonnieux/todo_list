import {mouseHover} from './newProject.js';
export function cancelOverlay(){
    const cancel = document.getElementById("cancel");
    const overlay = document.getElementById("overlayWrapper");
    // 'x' to hide overlay
    cancel.addEventListener("click", function(){
        overlay.style.display = "none";
    })
    mouseHover(cancel);
}