import { populateTasksArea } from "./tasks";
export const projectList = [];
// page selectors
const projectsAdd = document.getElementById("projectsAdd");
const overlay = document.getElementById("overlayWrapper");
const overlayBox = document.getElementById("overlayBox");
const projectsArea = document.getElementById("projectsArea");
// Add fields to  the overlay box
const newProjectWrapper = document.createElement("div");
newProjectWrapper.setAttribute("id", "newProjectWrapper");
newProjectWrapper.style.cssText = "text-align:left;";
const projectTitle = document.createElement("h3");
    projectTitle.textContent = "Add A New Project Name"
    newProjectWrapper.appendChild(projectTitle);
const projectName = document.createElement("input");
    projectName.type = "text";
    projectName.setAttribute('class', 'textField');
    newProjectWrapper.appendChild(projectName);
const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Add New";
    submit.setAttribute('class', 'button');
    newProjectWrapper.appendChild(submit);
overlayBox.appendChild(newProjectWrapper);
    // leave the fields off by default
    newProjectWrapper.style.display = "none";
// mouse hover function
export function mouseHover(target){
    target.addEventListener('mouseenter', function(){
        target.style.textDecoration = "underline";
        target.style.cursor = "pointer";
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
    return {name : name,
    tasks: [],};
}
// submit button / submit a new project name
submit.addEventListener('click', function(){
    newProjectWrapper.style.display = "none";
    overlay.style.display = "none";
    let createNewProject = newProject(projectName.value);
    projectList.push(createNewProject);
    projectsAreaUpdate();
    return
})
// update the projects list in the projects area on the DOM
function projectsAreaUpdate(){
    console.log('projectsAreaUpdate fired off!');
    projectsArea.innerHTML = "";
    for (let i = 0; i < projectList.length; i++){
        const wrapper = document.createElement("div");
        projectsArea.appendChild(wrapper);
        console.log(projectList);
        console.log(projectList.length);
        console.log('wrapper created');
            wrapper.setAttribute("class", "projectTab");
            let projectTitleLink = document.createElement('h3');
            projectTitleLink.textContent = projectList[i].name;
            projectTitleLink.addEventListener('click', function(){
                populateTasksArea(projectList[i])
            })
            mouseHover(projectTitleLink);
            wrapper.appendChild(projectTitleLink);
        // add edit
        const edit = document.createElement("span");
            edit.setAttribute("class", "editProject");
            edit.textContent = "edit";
            edit.addEventListener('click', function(){
                overlay.style.display = "block";
                editProjectName(projectList[i]);
            })
            mouseHover(edit);
            wrapper.appendChild(edit);
        // add delete
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
        console.log('wrapper added');
    }
}
function editProjectName(project){
    const wrapper = document.createElement("div");
        wrapper.setAttribute('id', 'editProjectWrapper');
    overlayBox.appendChild(wrapper);
    const enterNew = document.createElement('h3');
        enterNew.textContent = "enter a new project name";
        wrapper.appendChild(enterNew);
    const enterName = document.createElement("input");
        enterName.type = "text";
        enterName.setAttribute('class', 'textField');
        wrapper.appendChild(enterName);
    const submitName = document.createElement("input");
        submitName.type = "submit";
        submitName.setAttribute('class', 'button');
        wrapper.appendChild(submitName);
        submitName.addEventListener('click', function(){
            project.name = enterName.value;
            wrapper.style.display = "none";
            overlay.style.display = "none";
            projectsAreaUpdate();
        })
        // if x is clicked, i'll need to be able to turn off this wrapper!
    return
}