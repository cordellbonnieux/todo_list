export function cancelOverlay(){
    // 'x' to hide overlay
    cancel.addEventListener("click", function(){
        overlay.style.display = "none";
    })
        // x hover effects
        cancel.addEventListener("mouseenter", function(){
            cancel.style.textDecoration = "underline";
        })
        cancel.addEventListener("mouseleave", function(){
            cancel.style.textDecoration = "none";
        })
}