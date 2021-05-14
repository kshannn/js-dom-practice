// PLACE YOUR CODE HERE

//1 
let emphasisClassArray = document.querySelectorAll(".emphasis");

for (let element of emphasisClassArray){
    element.style.fontFamily = "Verdana";
}

//2
let listFinishedArray = document.querySelectorAll("li.finished")

for (let element of listFinishedArray){
    element.style.textDecoration = "line-through";
}

//3
let lowPriorityArray = document.querySelectorAll("#low-priority>li.todo")

for (let element of lowPriorityArray){
    element.style.backgroundColor = "blue";
}

//4
let alertArray = document.querySelectorAll(".alert")

for (let element of alertArray){
    element.style.color = "red";
}