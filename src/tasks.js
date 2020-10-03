import {mouseHover} from './newProject.js';
import {projectList} from './newProject.js';
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
                createNewTask(project);
                return
            })
            mouseHover(newTaskBtn);
    if (project.tasks){
        for (let i = 0; i < project.tasks.length; i++){
            const taskBox = document.createElement('div');
                taskBox.setAttribute('class', 'task');
                flexBox.appendChild(taskBox);
            let deleteTask = document.createElement('span');
                deleteTask.textContent = "x";
                deleteTask.addEventListener('click', function(){
                    project.tasks.splice([i], 1);
                    populateTasksArea(project);
                    return
                })
                mouseHover(deleteTask);
                taskBox.appendChild(deleteTask);
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
    } else {
        return
    }
    return
}
export function createNewTask(project){
    projectList.forEach(name => name.tasks = []);
    const overlayWrapper = document.getElementById("overlayWrapper");
    overlayWrapper.style.display = "block";
    const overlayBox = document.getElementById("overlayBox"); // might need to change the name
    // create overlay menu
    const newTaskWrapper = document.createElement('div');
        newTaskWrapper.setAttribute('id', 'newTaskWrapper');
        overlayBox.appendChild(newTaskWrapper);
        // make the input form then submit the data.
    const createANewTask = document.createElement('h3');
        createANewTask.textContent = "create a new task";
        newTaskWrapper.appendChild(createANewTask);
    const taskTitleLabel = document.createElement('label');
        taskTitleLabel.for = "taskTitle";
        taskTitleLabel.textContent = "task name";
        newTaskWrapper.appendChild(taskTitleLabel);
    const taskTitle = document.createElement('input');
        taskTitle.type = "text";
        taskTitle.setAttribute('id', 'taskTitle');
        newTaskWrapper.appendChild(taskTitle);
    const taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.for = "taskDescription";
        taskDescriptionLabel.textContent = "description of task";
        newTaskWrapper.appendChild(taskDescriptionLabel);
    const taskDescription = document.createElement('input');
        taskDescription.type = "textarea";
        taskDescription.setAttribute('id', 'taskDescription');
        newTaskWrapper.appendChild(taskDescription);

    const taskDueDateLabel = document.createElement('label');
        taskDueDateLabel.for = "taskDueDate";
        taskDueDateLabel.textContent = "task due date";
        newTaskWrapper.appendChild(taskDueDateLabel);
    const taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('id', 'taskDueDate');
        taskDueDate.type = "date";
        newTaskWrapper.appendChild(taskDueDate);
    const taskPriorityLabel = document.createElement('p');
        taskPriorityLabel.textContent = "task priority";
        newTaskWrapper.appendChild(taskPriorityLabel);
    const taskPriorityLow = document.createElement('input');
        taskPriorityLow.type = "radio";
        taskPriorityLow.setAttribute('id', 'taskPriorityLow');
        taskPriorityLow.value = "low";
        taskPriorityLow.name = "priority";
        newTaskWrapper.appendChild(taskPriorityLow);
    const taskPriorityMedium = document.createElement('input');
        taskPriorityMedium.type = "radio";
        taskPriorityMedium.setAttribute('id', 'taskPriorityMedium');
        taskPriorityMedium.value = "medium";
        taskPriorityMedium.name = "priority";
        newTaskWrapper.appendChild(taskPriorityMedium);
    const taskPriorityHigh = document.createElement('input');
        taskPriorityHigh.type = "radio";
        taskPriorityHigh.setAttribute('id', 'taskPriorityHigh');
        taskPriorityHigh.value = "high";
        taskPriorityHigh.name = "priority";
        newTaskWrapper.appendChild(taskPriorityHigh);

    const taskSubmit = document.createElement('input');
        taskSubmit.type = 'submit';
        newTaskWrapper.appendChild(taskSubmit);

        taskSubmit.addEventListener('click', function(){
            let taskPriority = "";
            if (taskPriorityLow.checked){
                taskPriority = "low";
            } else if (taskPriorityMedium.checked){
                taskPriority = "medium";
            } else if (taskPriorityHigh.checked){
                taskPriority = "high";
            } else {
                console.log('.checked didnt work!');
            }
            project.tasks.push({title: taskTitle.value,
            description: taskDescription.value,
            dueDate: taskDueDate.value,
            priority: taskPriority});
            newTaskWrapper.style.display = "none";
            overlayWrapper.style.display = "none";
            populateTasksArea(project);
            return
        })
    // submit info into projectList[i].task.etc
    // eg project.tasks.push(example)
    // display in flex box
    return
}

