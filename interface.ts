
// function
function showTodo(todo: { title:string, text:string }) {
    console.log(todo.title + " " + todo.text);
}

let theTodo = { title: 'food', text: 'is good'};

showTodo(theTodo);



// interface
interface Todo{
    title: string,
    text: string
}

function showTodo2(todo: Todo) {
    console.log(todo.title + " " + todo.text);
}

showTodo2(theTodo);