let todo = [];

let req = prompt("enter your request");

while(true) {
    if(req == "quit"){
        console.log("you quit");
        break;
    } 

    if(req == "list") {
        console.log("_____________");
        for(task of todo) {
            console.log(task);
        }
        console.log("___________");
    } else if(req == "add") {
        let newTask = prompt("Enter you task");
        todo.push(newTask);
        console.log("Task added successfully");
    } else if(req == "delete") {
        let idx = prompt("enter index of task");
        idx = parseInt(idx);
        todo.splice(idx, 1);
        console.log("task deleted successfully");
    } else {
        console.log("Invailed request!");
    }

    req = prompt("enter your request");
}