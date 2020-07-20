let toDoList = [
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
    
]
  
function addTask(arr) {
    let newTask = prompt("Enter new task");
    let counter = 0;
        for (let i = 0; i <  arr.length; i++) {
      
            if (arr[i].text === newTask ) {
            counter ++;
        };
    }

    if (counter < 1) {
        let newTaskObj = {
            name: "Task №" + (arr.length + 1),
            dateOfCreation: "Current date",
            status: "Active",
            text: newTask,  
        };
        arr.push(newTaskObj);
    };
return arr;
};

console.log(addTask(toDoList));


function deleteTask(arr, name) {
    for (let i = 0; i <  arr.length; i++) {
        
        if (name === arr[i].name) {
            const confirmation = confirm("Вы действительно хотите удалить " + arr[i].name + " ?");
            
            if (confirmation) {
                delete arr[i];
            }
        };
    };
return arr;
};

console.log(deleteTask(toDoList, "Task №2"));


function editTask(arr, name) {
    for (let i = 0; i <  arr.length; i++) {
        
        if (name === arr[i].name) {
            let changes = prompt("Введите новый текст");
            
            if(confirm("Сохранить изменения текста?")) {
                arr[i].text = changes;
            };   
        };
    };
return arr;
};

console.log(editTask(toDoList, "Task №2"));


function getInfo(arr) {
    let counterAct = 0;
    let counterCmpl = 0;
    
        for (let i = 0; i <  arr.length; i++) {
        
            if (arr[i].status === "Active") {
                counterAct++;
            } else {
                counterCmpl++;
            };    
        };

return "Всего задач выполнено: " + counterCmpl + ", активных: " + counterAct;
};

console.log(getInfo(toDoList));


function makeSealed(arr) {
    
    for (let i = 0; i <  arr.length; i++) {
       
        Object.seal(arr[i]);
    }
return arr;
};

