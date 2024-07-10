const formElement = document.getElementById('form-field'); 
const taskInput = document.getElementById("task");
const divElement = document.querySelector('.tasks-enteries');

// Random ID generator
const idGenerator = () => {
    let idKey = "task-" + Math.floor(Math.random() * 1000); // Generate a unique ID
    return idKey;
}

formElement.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    let enteredTask = taskInput.value.trim();

    if (enteredTask) {
        // Create new <li> element for the task
        let newPara = document.createElement('li');
        newPara.setAttribute("class", "tasks");

        // Assign a unique ID to the new <li> element
        let taskId = idGenerator();
        newPara.setAttribute("id", taskId);

        // Create icon for task completion
        let iconTick = document.createElement('i');
        iconTick.setAttribute("class", "fa-solid fa-check");

        // Create icon for task removal
        let iconXmark = document.createElement('i');
        iconXmark.setAttribute("class", "fa-solid fa-xmark");

        // Append icons and task content to the <li> element
        newPara.appendChild(document.createTextNode(enteredTask));
        newPara.appendChild(iconTick);
        newPara.appendChild(iconXmark);

        // Append the <li> element to the tasks container
        divElement.appendChild(newPara);
        taskInput.value = ''; // Clear input field after task is added

        // Event listener for completing the task
        iconTick.addEventListener('click', () => {
            newPara.classList.add('completed');
            console.log('Task completed');
        });

        // Event listener for removing the task
        iconXmark.addEventListener('click', () => {
            divElement.removeChild(newPara); // Remove <li> element from its parent
            console.log('Task removed');
        });
    } else {
        alert('Please enter a task');
    }
});
