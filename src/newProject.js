import { populateTasksArea } from "./tasks";
export const projectList = [];
// page selectors
const projectsAdd = document.getElementById("projectsAdd");
const overlay = document.getElementById("overlayWrapper");
const overlayBox = document.getElementById("overlayBox");
const projectsArea = document.getElementById("projectsArea");
export function createAddProject(){
    const newProjectWrapper = document.createElement("div");
    newProjectWrapper.setAttribute("id", "newProjectWrapper");
    newProjectWrapper.style.cssText = "text-align:center;";
    const projectTitle = document.createElement("h3");
        projectTitle.textContent = "Add A New Project Name"
        projectTitle.style.fontSize = "16px";
        newProjectWrapper.appendChild(projectTitle);
    const projectName = document.createElement("input");
        projectName.type = "text";
        overlayInputFields(projectName);
        projectName.setAttribute('class', 'textField');
        newProjectWrapper.appendChild(projectName);
    const submit = document.createElement("input");
        submit.type = "submit";
        submit.value = "Add New";
        submit.setAttribute('class', 'button');
        mouseHoverOverlay(submit);
        newProjectWrapper.appendChild(submit);
    overlayBox.appendChild(newProjectWrapper);
    // submit button / submit a new project name
    submit.addEventListener('click', function(){
        let createNewProject = newProject(projectName.value);
        projectList.push(createNewProject);
        projectsAreaUpdate();
        overlayBox.innerHTML = "";
        overlay.style.display = "none";
        return
    })
}
// mouse hover function
export function mouseHover(target){
    target.addEventListener('mouseenter', function(){
        target.style.textDecoration = "underline";
        target.style.cursor = "pointer";
        target.style.color = "#DB2B39";
    })
    target.addEventListener('mouseleave', function(){
        target.style.textDecoration = "none";
        target.style.color = "#06080E";
    })
}
// mouse hover function for headings
export function mouseHoverHeading(target){
    target.style.cssText = "transition:0.7s; color:#fff; border:1px solid #fff; padding:2px; background-color:#000;"
    target.addEventListener('mouseenter', function(){
        target.style.cursor = "pointer";
        target.style.color = "#000";
        target.style.backgroundColor = "#fff"
        target.textDecoration = "none";
    })
    target.addEventListener('mouseleave', function(){
        target.style.color = "#fff";
        target.style.backgroundColor = "#000";
        target.textDecoration = "none";
    })
}
// mouse hover function for overlay submit buttons
export function mouseHoverOverlay(target){
target.style.cssText = "display:block; transition:0.3s; font-weight:600; border-radius:0; background-color:#000; margin:10px auto; color:#fff; padding:4px 10px; border:1px solid #000;";
target.addEventListener('mouseenter', function(){
    target.style.cursor = "pointer";
    target.style.color = "#000";
    target.style.backgroundColor = "#fff"
    target.textDecoration = "none";
})
target.addEventListener('mouseleave', function(){
    target.style.color = "#fff";
    target.style.backgroundColor = "#000";
    target.textDecoration = "none";
})
}
// overlay input field styles
export function overlayInputFields(input){
    input.style.cssText ="display:block; padding:4px 8px; margin: 10px auto; width: 200px; border-radius: 0; box-shadow: 2px 2px; border: 1px solid #000; height: 20px;";
}
// add project button
export function addProject(){
    projectsAdd.addEventListener("click", function(){
        overlay.style.display = "block";
        createAddProject();
    })
}
// newProject Factory
function newProject(name){
    return {name : name,
    tasks: [],};
}
// update the projects list in the projects area on the DOM
function projectsAreaUpdate(){
    projectsArea.innerHTML = "";
    for (let i = 0; i < projectList.length; i++){
        const wrapper = document.createElement("div");
        projectsArea.appendChild(wrapper);
            wrapper.setAttribute("class", "projectTab");
            wrapper.style.cssText = "border:1px solid #000; padding:10px; background-color:#fff; box-shadow:4px 4px; margin:10px; color:#000;";

        let projectTitleLinkWrapper = document.createElement('div');
            wrapper.appendChild(projectTitleLinkWrapper);
            projectTitleLinkWrapper.setAttribute('class', 'projectTitleWrapper');
            projectTitleLinkWrapper.style.cssText = "display:inline-block; margin-right:20px";
            

        let projectTitleLink = document.createElement('h3');
            projectTitleLinkWrapper.appendChild(projectTitleLink);
            projectTitleLink.textContent = projectList[i].name;
            projectTitleLink.style.cssText = "margin:0 0 0 4px; font-size:16px;";
            projectTitleLink.addEventListener('click', function(){
                populateTasksArea(projectList[i])
            })
            mouseHover(projectTitleLink);
            
        let editDeleteWrapper = document.createElement('div');
            wrapper.appendChild(editDeleteWrapper);
            editDeleteWrapper.setAttribute('class', 'editDeleteProjectWrapper');
            editDeleteWrapper.style.cssText = "display:inline-block; font-size:10px;";

        // add edit
        const edit = document.createElement("span");
            editDeleteWrapper.appendChild(edit);
            edit.setAttribute("class", "editProject");
            edit.textContent = "edit";
            edit.style.margin = "0 3px";
            edit.addEventListener('click', function(){
                overlay.style.display = "block";
                editProjectName(projectList[i]);
            })
            mouseHover(edit);
            
        // add delete
        const del = document.createElement("span");
            editDeleteWrapper.appendChild(del);
            del.setAttribute("class", "deleteProject");
            del.textContent = "delete";
            del.style.margin = "0 3px";
            del.addEventListener('click', function(){
                projectList.splice([i],1);
                projectsAreaUpdate();
            })
            mouseHover(del);
    }
}
function editProjectName(project){
    const wrapper = document.createElement("div");
        wrapper.setAttribute('id', 'editProjectWrapper');
    overlayBox.appendChild(wrapper);
    const enterNew = document.createElement('h3');
        enterNew.textContent = "enter a new project name";
        enterNew.style.fontSize = "16px";
        wrapper.appendChild(enterNew);
    const enterName = document.createElement("input");
        enterName.type = "text";
        overlayInputFields(enterName);
        enterName.setAttribute('class', 'textField');
        wrapper.appendChild(enterName);
    const submitName = document.createElement("input");
        submitName.type = "submit";
        submitName.value = "Add New";
        submitName.setAttribute('class', 'button');
        mouseHoverOverlay(submitName);
        wrapper.appendChild(submitName);
        submitName.addEventListener('click', function(){
            project.name = enterName.value;
            overlayBox.innerHTML = "";
            overlay.style.display = "none";
            projectsAreaUpdate();
        })
}