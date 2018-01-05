var todos = [];

var input = prompt("What you you like to do?");

while (input !== "quit") {

    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What you you like to do?");
}
console.log("OK, You Quit The App");

function listTodos() {
    console.log("******")
    todos.forEach(function(todo, index){
    console.log(index + ": " + todo);
    });
    console.log("******");
}

function addTodo() {
    var newTodo = prompt("Enter new Todo");    
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo() {
    idx = prompt("Enter the index of todo to delete");
    todos.splice(idx, 1);
    console.log("Deleted todo");
}