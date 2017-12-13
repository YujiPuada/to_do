var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  // handle input
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    // ask for new todo
    var newTodo = prompt("Enter new todo")
    // add to todo's array
    todos.push(newTodo);
  }

  // ask again for todo
  input = prompt("What would you like to do?");
}

console.log("OK, you quit the app.");