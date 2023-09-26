const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add event listener to the "Add" button
addBtn.addEventListener('click', addTask);

// this functon will automatically add the task to the task list on pressing enter
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Adding task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
                <div class="task-act-btn">
                <span>${taskText}</span>
                <i class="bi bi-pencil-square edit-btn"></i>
                <i class="bi bi-trash3-fill delete-btn"></i>
                </div>
        `;

        // Add event listeners for edit and delete buttons
        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');
        
        editBtn.addEventListener('click', editTask);
        deleteBtn.addEventListener('click', deleteTask);

        // It will add new task to the task list as li
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Edit task function
function editTask(event) {
    const taskText = event.target.parentElement.querySelector('span');
    const newTaskText = prompt('Edit task:', taskText.textContent);
    if (newTaskText !== null) {
        taskText.textContent = newTaskText;
    }
}

// Delete task function
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    if (confirm('Are you sure you want to delete this task?')) {
        taskItem.remove();
    }
}



























// // Get elements from the DOM
// const taskInput = document.getElementById('task');
// const addBtn = document.getElementById('add-btn');
// const taskList = document.getElementById('task-list');

// // Add event listener to the "Add" button
// addBtn.addEventListener('click', addTask);

// // Add event listener to the input field to detect Enter key press
// taskInput.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         addTask();
//     }
// });



// // Add task function
// function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText !== '') {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <span>${taskText}</span>
//             <div class="task-act-btn">
//                 <button class="edit-btn">
//                     <i class="bi bi-pencil-square"></i>
//                 </button>
//                 <button class="delete-btn">
//                     <i class="bi bi-trash3-fill"></i>
//                 </button>
//             </div>
//         `;

//         // Add event listeners for edit and delete buttons
//         const editBtn = li.querySelector('.edit-btn');
//         const deleteBtn = li.querySelector('.delete-btn');
        
//         editBtn.addEventListener('click', editTask);
//         deleteBtn.addEventListener('click', deleteTask);

//         // Add the new task to the task list
//         taskList.appendChild(li);

//         // Clear the input field
//         taskInput.value = '';
//     }
// }

// // Edit task function
// function editTask(event) {
//     const taskText = event.target.parentElement.querySelector('span');
//     const newTaskText = prompt('Edit task:', taskText.textContent);
//     if (newTaskText !== null) {
//         taskText.textContent = newTaskText;
//     }
// }

// // Delete task function
// function deleteTask(event) {
//     const taskItem = event.target.parentElement;
//     if (confirm('Are you sure you want to delete this task?')) {
//         taskItem.remove();
//     }
// }
