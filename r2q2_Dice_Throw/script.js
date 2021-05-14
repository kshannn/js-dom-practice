// PLACE YOUR CODE HERE

let randomNum = Math.floor(Math.random() * 6 + 1); 

let leftBox;
let rightBox;

let rollBtn = document.querySelector("button").addEventListener("click",function(){
    leftBox = document.querySelector(".box")
    console.log(leftBox)
    let boxClass = document.querySelectorAll(".box")
    for (let i = 0; i < boxClass.length; i ++){
        if (i == 1){
            rightBox = boxClass[i];
        }
    }

    leftBox.innerHTML = randomNum;
    randomNum = Math.floor(Math.random() * 6 + 1); 
    rightBox.innerHTML = randomNum;

    // Display results
    document.querySelector("span").innerHTML = parseInt(leftBox.innerHTML)+parseInt(rightBox.innerHTML)

    
})