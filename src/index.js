document.addEventListener("DOMContentLoaded", () => {

// const toDoInput = document.getElementById('create-task-form')
// console.log(toDoInput);
// toDoInput.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const descriptionInput = document.getElementById('new-task-description')
//   const taskArea = document.getElementById('tasks')
//   const newTaskItem = document.createElement('li')
//   const addNewTaskItem = taskArea.appendChild(newTaskItem)

//   addNewTaskItem.textContent = descriptionInput.value

//   toDoInput.reset()
// })

// });

const toDoInput = document.getElementById('create-task-form')
toDoInput.addEventListener('submit', (event) => {
  event.preventDefault();

    const descriptionInput = document.getElementById('new-task-description')
    const taskArea = document.getElementById('tasks')
    const newTaskItem = document.createElement('li')
    const addNewTaskItem = taskArea.appendChild(newTaskItem)

    addNewTaskItem.textContent = descriptionInput.value
    toDoInput.reset()
})

});