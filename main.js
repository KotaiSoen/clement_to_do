const todosDiv = document.querySelector('.todos');
const todo = document.querySelector('.todo');

const todosArray = [];

function addTodo() {
    todosArray.push({
        todo: todo.value,
        completed: false
    });
    todo.value = '';
    todosDiv.innerHTML = '';
    for (let i = 0; i < todosArray.length; i++) {
        var todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <div class='todoItem'>
            <p class='todo.value' ondblclick="slash(event, ${i})">${todosArray[i].todo}</p>
            <button onclick="deleteTodo(event, ${i})" class="delete-button">delete</button>
        </div> 
        `
        todosDiv.appendChild(todoDiv);
    }
}

function deleteTodo(event, i) {
    todosArray.splice(i, 1);
    event.target.parentNode.remove();
}

function slash(event, i) {
    console.log('I have been slashed');
    todosArray[i].completed = !todosArray[i].completed;
    console.log(todosArray[i].completed)
    if(todosArray[i].completed === true) {
        event.target.classList.add('slashed');
    } else {
        event.target.classList.remove('slashed');
    }
   
}



