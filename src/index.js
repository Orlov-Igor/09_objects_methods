
let listObject = {
    toDoList: [
    {
    name: "Task №1",
    dateOfCreation: "02/07/2020",
    status: "Completed",
    text: "Visit a dentist",
    },
 
    {
    name: "Task №2",
    dateOfCreation: "05/07/2020",
    status: "Active",
    text: "Cut nose hair",
    },

    {
    name: "Task №3",
    dateOfCreation: "10/07/2020",
    status: "Active",
    text: "Bake a cake",
    },
    ],
    
}

listObject.addTask = function() {
    let newTask = {
        name: "Task number",
        dateOfCreation: "Current date",
        status: "Active",
        text: "Some text",
        }
    listObject.toDoList.push(newTask);
};
  
listObject.addTask();
console.log(listObject);


listObject.deleteTask = function(text, confirmation) {
   if (confirmation) {
       let task = listObject.toDoList.find(function(item) {
       return item.text === text;
    });
    let i = listObject.toDoList.indexOf(task);
    listObject.toDoList.splice(i, 1);  
   }; 
};

console.log(listObject.deleteTask("Cut nose hair", true));
console.log(listObject);


listObject.findDublicate = function(text) {
    let task = listObject.toDoList.find(function(item) {
        return item.text === text;
    });
    if (task !== undefined) {
        return true;
    } else {
        return false;
    };
};

console.log(listObject.findDublicate("Cut nose hair"));




