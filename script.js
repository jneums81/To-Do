let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const newTask = {
        title: taskInput.value,
        completed: false
    };

    tasks.push(newTask);
    updateTaskList(taskList);
    taskInput.value = "";
}

function updateTaskList(taskList) {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" id="task${index}" onchange="toggleCompletion(${index})" ${task.completed ? "checked" : ""}>
            <label for="task${index}" class="${task.completed ? "completed" : ""}">${task.title}</label>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    const taskList = document.getElementById("taskList");
    updateTaskList(taskList);
}

function deleteTask(index) {
    tasks.splice(index, 1);
    const taskList = document.getElementById("taskList");
    updateTaskList(taskList);
}
