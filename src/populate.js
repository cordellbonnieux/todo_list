export function populate(){
    const titleBar = document.getElementById("titleBar");
        const pageTitle = document.createElement("h1");
            pageTitle.textContent = "Todo List";
        titleBar.appendChild(pageTitle);

    const projectsTitle = document.getElementById("projectsTitle");
        const projects = document.createElement("h2");
            projects.textContent = "Projects";
        projectsTitle.appendChild(projects);

    const projectsAdd = document.getElementById("projectsAdd");
        const add = document.createElement("span");
            add.textContent = "Add";
        projectsAdd.appendChild(add);   
};