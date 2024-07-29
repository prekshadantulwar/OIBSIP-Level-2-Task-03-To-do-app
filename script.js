document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const pendingTasks = document.getElementById('pending-tasks');
    const completedTasks = document.getElementById('completed-tasks');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText, false);
            taskInput.value = '';
        }
    });

    function addTask(text, isCompleted) {
        const task = document.createElement('li');
        task.textContent = text;

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const completeButton = document.createElement('button');
        completeButton.textContent = isCompleted ? 'Unmark' : 'Complete';
        completeButton.addEventListener('click', () => {
            task.classList.toggle('completed');
            if (task.classList.contains('completed')) {
                completedTasks.appendChild(task);
                completeButton.textContent = 'Unmark';
            } else {
                pendingTasks.appendChild(task);
                completeButton.textContent = 'Complete';
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            task.remove();
        });

        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        task.appendChild(actions);

        if (isCompleted) {
            task.classList.add('completed');
            completedTasks.appendChild(task);
        } else {
            pendingTasks.appendChild(task);
        }
    }
});
