import { mouseHover, mouseHoverHeading } from "./newProject";
export function populate(){
    const titleBar = document.getElementById("titleBar");
        const pageTitle = document.createElement("h1");
            pageTitle.textContent = "to-do list";
            pageTitle.style.cssText = "margin:6px; font-size:18px;";
            titleBar.appendChild(pageTitle);

    const projectsTitle = document.getElementById("projectsTitle");
        const projects = document.createElement("h2");
            projects.textContent = "Projects";
            projects.style.margin = "0";
        projectsTitle.appendChild(projects);

    const projectsAdd = document.getElementById("projectsAdd");
        const add = document.createElement("span");
            add.textContent = "add";
            mouseHoverHeading(add);

        projectsAdd.appendChild(add);

    const projectsDescriptionWrapper = document.createElement('div');
        projectsAreaDiv.appendChild(projectsDescriptionWrapper);
        projectsDescriptionWrapper.style.cssText = "padding:10px; background-color:#fff; border:1px solid #000; box-shadow:4px 4px; margin:10px; color:#000; font-size:12px;";
    const projectsDescription = document.createElement('p');
        projectsDescriptionWrapper.appendChild(projectsDescription);
        projectsDescription.textContent = `To add a project, click the 'add project' text above!`;
        
};
const projectsAreaDiv = document.getElementById('projectsArea');