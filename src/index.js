//document.addEventListener("DOMContentLoaded", () => 
//{
//});

//Selectors
const newTaskForm = document.getElementById("create-task-form");
const newTaskInput = document.getElementById("new-task-description");
const newTaskItems = document.getElementById("tasks")

//array to store task items
let tasks = [];

//add event listeners
newTaskForm.addEventListener('submit', function(event)
  {
    event.preventDefault();
    addTask(newTaskInput.value);
  });

// function to add tasks to list
function addTask(item)
  {
    if(item !== ' ')
    {
      const task = 
      {
        id: Date.now(),
        name: item,
        completed: false
      };

      //push to task array
      tasks.push(task);
      renderTasks(task); // render them into the <ul>

      //clear input box value
      newTaskInput.value = ' ';
    }
  }

//function to render tasks to screen
function renderTasks()
  {
    //clear everything into <ul>
    newTaskItems.innerHTML = ' ';

    //run through each item
    tasks.forEach(function(item)
    {
      //check if item is completed
      const checked = item.completed ? 'checked': null;

      //make a <li> element and fill it
      const li = document.createElement('li');
      li.setAttribute('class', 'item')

       li.setAttribute('date-key', item.id);

      if(item.completed === true)
      {
        li.classList.add('checked');
      }

      li.innerHTML =`<input type = "checkbox" class = "checkbox" ${checked}> 
      ${item.name}
      <button class = "deleted-button">X</button>`

      newTaskItems.append(li);
    })
  }
  