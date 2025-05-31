const inputtask = document.getElementById('inputtask');
const TASKBTN = document.getElementById('TASKBTN');
const todoList = document.getElementById('todoList');


TASKBTN.addEventListener('click', function() {
  const taskText = inputtask.value.trim();

  
  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;

    todoList.appendChild(li);

    taskInput.value = "";
  }
});