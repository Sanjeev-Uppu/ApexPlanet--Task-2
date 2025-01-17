 
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Form submitted successfully!');
    event.target.reset();
});


document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert('Please enter a task!');
        return;
    }

    addTask(taskText);
    taskInput.value = '';
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function () {
        taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(removeButton);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);
}

 
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

 
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

