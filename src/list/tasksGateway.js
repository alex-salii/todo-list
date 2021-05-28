const baseUrl = 'https://crudcrud.com/api/1146753d3f6a42b38c5b1ed90dc9e052/tasks';

export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const updateTask = (taskId, taskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const deleteTask = (taskId) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });

const mapTasks = tasks => 
    tasks.map(({_id, ...rest }) => ({ ...rest, id: _id}));

export const getTasksList = () =>
    fetch(baseUrl)
        .then(resoponse => resoponse.json())
        .then(tasks => mapTasks(tasks));