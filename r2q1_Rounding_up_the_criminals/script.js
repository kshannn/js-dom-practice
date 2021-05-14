// PLACE YOUR CODE HERE

//1 & 2
let arrestedArray = document.querySelectorAll(".a")

for (let arrested of arrestedArray){
    arrested.style.backgroundColor = "red"
    let name = arrested.innerText
    arrested.innerText = name + " " + "(jailed)"
}

//3
let undercoverArray = document.querySelectorAll(".a.undercover")

for (let element of undercoverArray){
    element.style.backgroundColor = "yellow"
}