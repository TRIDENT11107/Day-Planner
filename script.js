document.addEventListener("DOMContentLoaded", function() {
    
    updateDateDisplay();
    
    loadTasks();
    
    checkEmptyState();
});

function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateDisplay = document.getElementById('current-date');
    dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
}

function addTask() {
    let time = document.getElementById("task-time").value;
    let taskText = document.getElementById("task-input").value.trim();
    
    if (!time || !taskText) {
        alert("Please enter both time and task!");
        return;
    }
    
    
    const [hours, minutes] = time.split(':');
    const formattedTime = new Date().setHours(hours, minutes);
    const displayTime = new Date(formattedTime).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    
    let taskList = document.getElementById("task-list");
    
    
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="task-info">
            <div class="task-time">${displayTime}</div>
            <div class="task-text">${taskText}</div>
        </div>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(li);
    
    
    saveTask(time, taskText, displayTime);
    
        document.getElementById("task-time").value = "";
    document.getElementById("task-input").value = "";
    
    
    checkEmptyState();
}

function deleteTask(button) {
    let taskItem = button.parentElement;
    let taskTime = taskItem.querySelector(".task-time").textContent;
    let taskText = taskItem.querySelector(".task-text").textContent;
    
    taskItem.style.opacity = "0"; // Smooth fade-out effect
    setTimeout(() => {
        taskItem.remove();
        removeTaskFromStorage(taskTime, taskText);
        checkEmptyState();
    }, 300);
}

// Save tasks in local storage with both original and display time
function saveTask(originalTime, taskText, displayTime) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ originalTime, taskText, displayTime });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from storage on page load
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("task-list");
    
    tasks.forEach(({ originalTime, taskText, displayTime }) => {
        // If displayTime is not saved (for backward compatibility)
        const timeToShow = displayTime || originalTime;
        
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="task-info">
                <div class="task-time">${timeToShow}</div>
                <div class="task-text">${taskText}</div>
            </div>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Remove task from local storage
function removeTaskFromStorage(displayTime, taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => 
        !(task.displayTime === displayTime && task.taskText === taskText));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear all tasks
function clearAllTasks() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        document.getElementById("task-list").innerHTML = "";
        localStorage.removeItem("tasks");
        checkEmptyState();
    }
}

// Sort tasks by time
function sortTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (tasks.length <= 1) return;
    
    // Sort by original time
    tasks.sort((a, b) => {
        return convertTimeToMinutes(a.originalTime) - convertTimeToMinutes(b.originalTime);
    });
    
    // Update local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    // Reload tasks to show sorted list
    document.getElementById("task-list").innerHTML = "";
    loadTasks();
}

// Convert time to minutes for easy comparison
function convertTimeToMinutes(time) {
    if (!time) return 0;
    const [hours, minutes] = time.split(':');
    return parseInt(hours) * 60 + parseInt(minutes);
}

// Check if task list is empty and show/hide empty state message
function checkEmptyState() {
    const taskList = document.getElementById("task-list");
    const emptyState = document.getElementById("empty-state");
    
    if (taskList.children.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}