export let projectList = [];
// page selectors
const projectsAdd = document.getElementById("projectsAdd");
const overlay = document.getElementById("overlayWrapper");
const overlayBox = document.getElementById("overlayBox");
const projectsArea = document.getElementById("projectsArea");
const cancel = document.getElementById("cancel");
// Add fields to  the overlay box
const newProjectWrapper = document.createElement("div");
newProjectWrapper.setAttribute("id", "newProjectWrapper");
newProjectWrapper.style.cssText = "text-align:left;";
const projectTitle = document.createElement("h3");
    projectTitle.textContent = "Add A New Project Name"
    newProjectWrapper.appendChild(projectTitle);
const projectName = document.createElement("input");
    projectName.type = "text";
    newProjectWrapper.appendChild(projectName);
const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Add New";
    newProjectWrapper.appendChild(submit);
overlayBox.appendChild(newProjectWrapper);
    // leave the fields off by default
    newProjectWrapper.style.display = "none";
// mouse hover function
function mouseHover(target){
    target.addEventListener('mouseenter', function(){
        target.style.textDecoration = "underline";
    })
    target.addEventListener('mouseleave', function(){
        target.style.textDecoration = "none";
    })
}
// add project button
export function addProject(){
    projectsAdd.addEventListener("click", function(){
        overlay.style.display = "block";
        newProjectWrapper.style.display = "block";
        projectName.value = "";
    })
    mouseHover(projectsAdd);
}
// newProject Factory
function newProject(name){
    return {name : name};
}
// submit button / submit a new project name
submit.addEventListener('click', function(){
    overlay.style.display = "none";
    projectList.push(newProject(projectName.value));
    projectsAreaUpdate();
    console.log(projectList);
})
// update the projects list in the projects area on the DOM
// this below needs to be fixed so i dont get the e error!
function projectsAreaUpdate(){
    projectsArea.innerHTML = "";
    for (let i = 0;i <= projectList.length; i++){
        const wrapper = document.createElement("div");
            wrapper.setAttribute("class", "projectTab");
            wrapper.textContent = projectList[i].name;
        // add delete and edit to it next
            const del = document.createElement("span");
            del.setAttribute("class", "deleteProject");
                del.textContent = "delete";
                del.addEventListener('click', function(){
                    projectList.splice([i],1);
                    projectsAreaUpdate();
                })
                mouseHover(del);
                wrapper.appendChild(del);
        //
        projectsArea.appendChild(wrapper);
    }
}