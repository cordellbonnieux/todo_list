import { mouseHover } from "./newProject";
export function populate(){
    const titleBar = document.getElementById("titleBar");
        const pageTitle = document.createElement("h1");
            pageTitle.textContent = "to-do list";
            titleBar.appendChild(pageTitle);

    const projectsTitle = document.getElementById("projectsTitle");
        const projects = document.createElement("h2");
            projects.textContent = "Projects";
        projectsTitle.appendChild(projects);

    const projectsAdd = document.getElementById("projectsAdd");
        const add = document.createElement("span");
            add.textContent = "Add";
            add.style.color = "#06080E";
        projectsAdd.appendChild(add);
    mouseHover(projectsAdd);
    const projectsDescriptionWrapper = document.createElement('div');
        projectsAreaDiv.appendChild(projectsDescriptionWrapper);
        projectsDescriptionWrapper.style.cssText = "padding:10px; background-color:#fff; border:1px solid #000; box-shadow:4px 4px; margin:10px; color:#000; font-size:12px;";
    const projectsDescription = document.createElement('p');
        projectsDescriptionWrapper.appendChild(projectsDescription);
        projectsDescription.textContent = `To add a project, click the 'add project' text above!`;
        
};
const projectsAreaDiv = document.getElementById('projectsArea');