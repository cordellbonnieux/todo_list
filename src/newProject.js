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

// add project button
export function addProject(){
    projectsAdd.addEventListener("click", function(){
        overlay.style.display = "block";
        newProjectWrapper.style.display = "block";
        projectName.value = "";
    })
        // add project button hover
        projectsAdd.addEventListener("mouseenter", function(){
            projectsAdd.style.textDecoration = "underline";
        })
        projectsAdd.addEventListener("mouseleave", function(){
            projectsAdd.style.textDecoration = "none";
        })
}
// newProject Factory
function newProject(name){
    return {name : name};
}
// submit button / submit a new project name
submit.addEventListener('click', function(){
    overlay.style.display = "none";
    projectList.push(newProject(projectName.value));
    //projectsAreaUpdate();
    console.log(projectList);
})
// update the projects list in the projects area on the DOM
// this below needs to be fixed so i dont get the e error!
function projectsAreaUpdate(){
    projectsArea.innerHTML = "";
    for (let i = 0;i <= projectList.length; i++){
        const wrapper = document.createElement("div");
            wrapper.setAttribute("class", "projectTab");
            wrapper.textContent = `${projectList[i].name}`;
        // add delete and edit to it next
        projectsArea.appendChild(wrapper);
    }
}