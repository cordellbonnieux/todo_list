export function populateTasksArea(project){
    const tasksWrapper = document.getElementById("tasksWrapper");
        tasksWrapper.innerHTML = "";
    const flexBox = document.createElement("div");
        tasksWrapper.appendChild(flexBox);
        flexBox.setAttribute("id", "flexBox");
        flexBox.style.display = "flex";
        const newTaskBtn = document.createElement('span');
            tasksWrapper.prepend(newTaskBtn);
            newTaskBtn.setAttribute('id', 'newTaskBtn');
            newTaskBtn.textContent = "add task";
            newTaskBtn.addEventListener('click', function(){
                createNewTask();
                return
            })
    for (let i = 0; i <= project.tasks.length; i++){
        const taskBox = document.createElement('div');
            taskBox.setAttribute('class', 'task');
            flexBox.appendChild(taskBox);
        let deleteTask = document.createElement('span');
            deleteTask.addEventListener('click', function(){
                project.tasks.splice([i], 1);
                populateTasksArea(project);
                return
            })
        let title = document.createElement('h4');
            title.textContent = project.tasks[i].title;
            taskBox.appendChild(title);
        let description = document.createElement('p');
            description.textContent = project.tasks[i].description;
            taskBox.appendChild(description);
        let dueDate = document.createElement('span');
            dueDate.textContent = project.tasks[i].dueDate;
            taskBox.appendChild(dueDate);
        let priority = document.createElement('span');
            priority.textContent = project.tasks[i].priority;
            taskBox.appendChild(priority);
    }
    return
}
export function createNewTask(){
    projectList.forEach(project => project.tasks = []);
    // create overlay menu
    // cancel out all other overlays
    // submit info into projectList[i].task.etc
    // display in flex box

}

