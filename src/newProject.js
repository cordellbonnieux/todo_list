export let projectList = [];
// common selectors
const projectsAdd = document.getElementById("projectsAdd");
const overlay = document.getElementById("overlayWrapper");
const overlayBox = document.getElementById("overlayBox");
// newProject Factory
function newProject(name){
    return {name : name};
}
// add project button
export function addProject(){
    projectsAdd.addEventListener("click", function(){
        overlay.style.display = "block";
        newProjectFields(projects);
    })
}
// New Project Input Fields
function newProjectFields(){
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
    submitNewProject(projectName, submit);
}
// submit new project
function submitNewProject(name, submit){
    submit.addEventListener('click', function(){
        // works now that projectList is in the same file
        let projectNew = newProject(name.value);
        return projectList.push(projectNew), console.log(projectList);
    })
}