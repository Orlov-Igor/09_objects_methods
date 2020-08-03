
let listObject = {
    toDoList: [
    {
    name: "Task №1",
    dateOfCreation: "02/07/2020",
    status: "Active",
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
    status: "Completed",
    text: "Bake a cake",
    },
    ],
    
}

let findDublicate = function(text) {
    let task = listObject.toDoList.find(function(item) {
        return item.text === text;
    });
    if (task === undefined) {
        return true;
    } else {
        return false;
    };
};


listObject.addTask = function(text) {
    if(findDublicate(text)) {
        let newTask = {
            name: "Task number",
            dateOfCreation: "Current date",
            status: "Active",
            text: "",
            }
        newTask.name = "Task №" + Number(listObject.toDoList.length + 1);
        newTask.text = text;
        listObject.toDoList.push(newTask);
    } else {
        throw new Error("This task already exist");
    };
};
  
listObject.addTask("Save the world");
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

console.log(listObject.deleteTask("Visit a dentist", true));
console.log(listObject);


listObject.editTask = function(text, newText, confirmation) {
    if (confirmation) {
        let task = listObject.toDoList.find(function(item) {
        return item.text === text;
        });
        if(findDublicate(newText)) {
            task.text = newText; 
        } else {
            throw new Error("This task already exist");
        };
    };  
};
 
console.log(listObject.editTask("Cut nose hair", "Cut nose hair and shave my legs", true));
console.log(listObject);


listObject.getInfo = function() {
    let total = listObject.toDoList.length;
    let completedList = listObject.toDoList.filter(function(item) {
        return item.status === "Completed";
    });
    let completed = completedList.length;
    return `Total: ${total}, completed: ${completed}`;
};

console.log(listObject.getInfo());

Object.seal(listObject);

listObject.toDoList.forEach(function(item) {
    Object.seal(item);
});
