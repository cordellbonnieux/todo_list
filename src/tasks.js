import {mouseHover, mouseHoverHeading, overlayInputFields, mouseHoverOverlay} from './newProject.js';
import {projectList} from './newProject.js';
export function populateTasksArea(project){
    const tasksWrapper = document.getElementById("tasksWrapper");
        tasksWrapper.innerHTML = "";
        tasksWrapper.style.cssText = "background-color:#000; color:#fff; margin:0 10px;";
    const flexBox = document.createElement("div");
        tasksWrapper.appendChild(flexBox);
        flexBox.setAttribute("id", "flexBox");
        flexBox.style.cssText = "display:flex; flex-wrap:wrap; background:#fff;";
        const newTaskBtn = document.createElement('span');
            tasksWrapper.prepend(newTaskBtn);
            newTaskBtn.setAttribute('id', 'newTaskBtn');
            newTaskBtn.textContent = "add";
            newTaskBtn.addEventListener('click', function(){
                createNewTask(project);
                return
            })
            mouseHoverHeading(newTaskBtn);
        const projectNameTaskArea = document.createElement('h3');
            tasksWrapper.prepend(projectNameTaskArea);
            projectNameTaskArea.textContent = `${project.name}'s tasks`;
            projectNameTaskArea.style.display = "inline-block";
            projectNameTaskArea.style.margin = "10px";
    if (project.tasks.length > 0){
        for (let i = 0; i < project.tasks.length; i++){
            const taskBox = document.createElement('div');
                taskBox.setAttribute('class', 'task');
                taskBox.style.cssText = "max-width: 300px; border:1px solid #000; padding:10px; background-color:#fff; box-shadow:4px 4px; margin:10px; color:#000; font-size:12px;";
                flexBox.appendChild(taskBox);
            let title = document.createElement('h4');
                title.textContent = project.tasks[i].title;
                taskBox.appendChild(title);
            let description = document.createElement('p');
                description.textContent = project.tasks[i].description;
                taskBox.appendChild(description);
            let dueDate = document.createElement('span');
                dueDate.textContent = project.tasks[i].dueDate;
                dueDate.prepend('due date: ');
                dueDate.style.display = "block";
                taskBox.appendChild(dueDate);
            let priority = document.createElement('span');
                priority.textContent = project.tasks[i].priority;
                taskBox.appendChild(priority);
                priority.prepend('priority: ');
                priority.style.display = "block";

            const modifyWrapper = document.createElement('div');
                modifyWrapper.style.textAlign = "right";
                taskBox.appendChild(modifyWrapper);
            let editTask = document.createElement('span');
                editTask.textContent = "edit";
                editTask.style.fontSize = "10px";
                editTask.style.margin = "0 3px";
                editTask.addEventListener('click', function(){
                    editSelectedTask(project.tasks[i], project);
                    populateTasksArea(project);
                    return
                })
                mouseHover(editTask);
                modifyWrapper.appendChild(editTask);
            let deleteTask = document.createElement('span');
                deleteTask.textContent = "delete";
                deleteTask.style.fontSize = "10px";
                deleteTask.style.margin = "0 3px";
                deleteTask.addEventListener('click', function(){
                    project.tasks.splice([i], 1);
                    populateTasksArea(project);
                    return
                })
                mouseHover(deleteTask);
                modifyWrapper.appendChild(deleteTask);
        }
    } else {
        const taskPromptWrapper = document.createElement('div');
            taskPromptWrapper.style.cssText = "";
            flexBox.appendChild(taskPromptWrapper);
        const taskPromptText = document.createElement('p');
            taskPromptText.style.cssText = "padding:10px; background-color:#fff; border:1px solid #000; box-shadow:4px 4px; margin:10px; color:#000; font-size:12px;";
            taskPromptText.textContent = `To add a task to this project, click the 'add' text above!`;
            taskPromptWrapper.appendChild(taskPromptText);
    }
    return
}
export function createNewTask(project){
    const overlayWrapper = document.getElementById("overlayWrapper");
    overlayWrapper.style.display = "block";
    const overlayBox = document.getElementById("overlayBox"); // might need to change the name
    // create overlay menu
    const newTaskWrapper = document.createElement('div');
        newTaskWrapper.setAttribute('id', 'newTaskWrapper');
        newTaskWrapper.style.fontSize = "12px";
        overlayBox.appendChild(newTaskWrapper);
        // make the input form then submit the data.
    const createANewTask = document.createElement('h3');
        createANewTask.textContent = "create a new task";
        createANewTask.style.fontSize = "16px";
        newTaskWrapper.appendChild(createANewTask);
    const taskTitleLabel = document.createElement('label');
        taskTitleLabel.for = "taskTitle";
        taskTitleLabel.textContent = "task name";
        newTaskWrapper.appendChild(taskTitleLabel);
    const taskTitle = document.createElement('input');
        taskTitle.type = "text";
        taskTitle.setAttribute('id', 'taskTitle');
        overlayInputFields(taskTitle);
        newTaskWrapper.appendChild(taskTitle);
    const taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.for = "taskDescription";
        taskDescriptionLabel.textContent = "description of task";
        newTaskWrapper.appendChild(taskDescriptionLabel);
    const taskDescription = document.createElement('input');
        taskDescription.type = "textarea";
        taskDescription.setAttribute('id', 'taskDescription');
        overlayInputFields(taskDescription);
        newTaskWrapper.appendChild(taskDescription);

    const taskDueDateLabel = document.createElement('label');
        taskDueDateLabel.for = "taskDueDate";
        taskDueDateLabel.textContent = "task due date";
        newTaskWrapper.appendChild(taskDueDateLabel);
    const taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('id', 'taskDueDate');
        taskDueDate.type = "date";
        overlayInputFields(taskDueDate);
        taskDueDate.style.width = "auto";
        newTaskWrapper.appendChild(taskDueDate);
    const taskPriorityLabel = document.createElement('p');
        taskPriorityLabel.textContent = "task priority";
        newTaskWrapper.appendChild(taskPriorityLabel);
    // low priority
    const lowLabel = document.createElement('span');
            lowLabel.textContent = "low:";
    const taskPriorityLow = document.createElement('input');
        taskPriorityLow.type = "radio";
        taskPriorityLow.setAttribute('id', 'taskPriorityLow');
        taskPriorityLow.value = "low";
        taskPriorityLow.name = "priority";
        newTaskWrapper.appendChild(lowLabel);
        newTaskWrapper.appendChild(taskPriorityLow);
    // medium priority
    const mediumLabel = document.createElement('label');
        mediumLabel.textContent = "medium:";
    const taskPriorityMedium = document.createElement('input');
        taskPriorityMedium.type = "radio";
        taskPriorityMedium.setAttribute('id', 'taskPriorityMedium');
        taskPriorityMedium.value = "medium";
        taskPriorityMedium.name = "priority";
        newTaskWrapper.appendChild(mediumLabel);
        newTaskWrapper.appendChild(taskPriorityMedium);
    // high priority
    const highLabel = document.createElement('label');
        highLabel.textContent = "high:";
    const taskPriorityHigh = document.createElement('input');
        taskPriorityHigh.type = "radio";
        taskPriorityHigh.setAttribute('id', 'taskPriorityHigh');
        taskPriorityHigh.value = "high";
        taskPriorityHigh.name = "priority";
        newTaskWrapper.appendChild(highLabel);
        newTaskWrapper.appendChild(taskPriorityHigh);
    //
    const taskSubmit = document.createElement('input');
        taskSubmit.type = 'submit';
        taskSubmit.value = "add task";
        newTaskWrapper.appendChild(taskSubmit);
        mouseHoverOverlay(taskSubmit);
        taskSubmit.addEventListener('click', function(){
            if (taskTitle.value.length < 1 ){
                alert("please enter a task name!")
                return false;
            }
            if (taskDescription.value.length < 1 ){
                alert("please enter a task description!")
                return false;
            }
            if (!taskDueDate.value){
                alert('please add a due date!')
                return false;
            }
            let taskPriority = "";
            if (taskPriorityLow.checked){
                taskPriority = "low";
            } else if (taskPriorityMedium.checked){
                taskPriority = "medium";
            } else if (taskPriorityHigh.checked){
                taskPriority = "high";
            } else {
                alert('Please add a priority!');
                return false;
            }
            let newTask = taskFactory(taskTitle.value,taskDescription.value,taskDueDate.value,taskPriority);
            project.tasks.push(newTask);
            populateTasksArea(project);
            overlayBox.innerHTML = "",overlayWrapper.style.display = "none";
            return
        })
    return
}
export function editSelectedTask(task, project){
    const overlayWrapper = document.getElementById("overlayWrapper");
    overlayWrapper.style.display = "block";
    const overlayBox = document.getElementById("overlayBox");
    // create overlay menu
    const newTaskWrapper = document.createElement('div');
        newTaskWrapper.setAttribute('id', 'newTaskWrapper');
        newTaskWrapper.style.fontSize = "12px";
        overlayBox.appendChild(newTaskWrapper);
        // make the input form then submit the data.
    const createANewTask = document.createElement('h3');
        createANewTask.textContent = `edit ${task.title}`;
        newTaskWrapper.appendChild(createANewTask);
    const taskTitleLabel = document.createElement('label');
        taskTitleLabel.for = "taskTitle";
        taskTitleLabel.textContent = "task name";
        newTaskWrapper.appendChild(taskTitleLabel);
    const taskTitle = document.createElement('input');
        taskTitle.type = "text";
        overlayInputFields(taskTitle);
        taskTitle.setAttribute('id', 'taskTitle');
        newTaskWrapper.appendChild(taskTitle);
    const taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.for = "taskDescription";
        taskDescriptionLabel.textContent = "description of task";
        newTaskWrapper.appendChild(taskDescriptionLabel);
    const taskDescription = document.createElement('input');
        taskDescription.type = "textarea";
        overlayInputFields(taskDescription);
        taskDescription.setAttribute('id', 'taskDescription');
        newTaskWrapper.appendChild(taskDescription);

    const taskDueDateLabel = document.createElement('label');
        taskDueDateLabel.for = "taskDueDate";
        taskDueDateLabel.textContent = "task due date";
        newTaskWrapper.appendChild(taskDueDateLabel);
    const taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('id', 'taskDueDate');
        taskDueDate.type = "date";
        overlayInputFields(taskDueDate);
        taskDueDate.style.width = "auto";
        newTaskWrapper.appendChild(taskDueDate);
    const taskPriorityLabel = document.createElement('p');
        taskPriorityLabel.textContent = "task priority";
        newTaskWrapper.appendChild(taskPriorityLabel);
    // low priority
    const lowLabel = document.createElement('span');
            lowLabel.textContent = "low:";
    const taskPriorityLow = document.createElement('input');
        taskPriorityLow.type = "radio";
        taskPriorityLow.setAttribute('id', 'taskPriorityLow');
        taskPriorityLow.value = "low";
        taskPriorityLow.name = "priority";
        newTaskWrapper.appendChild(lowLabel);
        newTaskWrapper.appendChild(taskPriorityLow);
    // medium priority
    const mediumLabel = document.createElement('label');
        mediumLabel.textContent = "medium:";
    const taskPriorityMedium = document.createElement('input');
        taskPriorityMedium.type = "radio";
        taskPriorityMedium.setAttribute('id', 'taskPriorityMedium');
        taskPriorityMedium.value = "medium";
        taskPriorityMedium.name = "priority";
        newTaskWrapper.appendChild(mediumLabel);
        newTaskWrapper.appendChild(taskPriorityMedium);
    // high priority
    const highLabel = document.createElement('label');
        highLabel.textContent = "high:";
    const taskPriorityHigh = document.createElement('input');
        taskPriorityHigh.type = "radio";
        taskPriorityHigh.setAttribute('id', 'taskPriorityHigh');
        taskPriorityHigh.value = "high";
        taskPriorityHigh.name = "priority";
        newTaskWrapper.appendChild(highLabel);
        newTaskWrapper.appendChild(taskPriorityHigh);
    //
    const taskSubmit = document.createElement('input');
        taskSubmit.type = 'submit';
        taskSubmit.value = "update task"
        newTaskWrapper.appendChild(taskSubmit);
        mouseHoverOverlay(taskSubmit);
        taskSubmit.addEventListener('click', function(){
            if (taskTitle.value.length < 1 ){
                alert("please enter a task name!")
                return false;
            }
            if (taskDescription.value.length < 1 ){
                alert("please enter a task description!")
                return false;
            }
            if (!taskDueDate.value){
                alert('please add a due date!')
                return false;
            }
            let taskPriority = "";
            if (taskPriorityLow.checked){
                taskPriority = "low";
            } else if (taskPriorityMedium.checked){
                taskPriority = "medium";
            } else if (taskPriorityHigh.checked){
                taskPriority = "high";
            } else {
                alert('Please add a priority!');
                return false;
            }
            task.title = taskTitle.value;
            task.description = taskDescription.value;
            task.dueDate = taskDueDate.value;
            task.priority = taskPriority;
            populateTasksArea(project);
            overlayBox.innerHTML = "",overlayWrapper.style.display = "none";
            return
        })
    return
}
// Task Factory
function taskFactory(title,description,dueDate,priority){
    return {title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,}
}

