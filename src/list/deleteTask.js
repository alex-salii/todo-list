import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { getTasksList, deleteTask } from './tasksGateway.js'

export const onDeleteTask = e => {
    const taskId = e.target.closest('.list-item').dataset.id;

    deleteTask(taskId)
        .then(getTasksList)
        .then(newTasksList => {
            setItem('tasksList', newTasksList);

            renderTasks();
        });
};