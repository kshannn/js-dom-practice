// PLACE YOUR CODE HERE


// function checkBalance () {
//     if (current <= 0 || wallet <= 0){
//         console.log("You have no money")
//     }
// }


document.querySelector("#topUp10").addEventListener("click",function(){
    let current = parseInt(document.querySelector("#account").innerHTML)
    current += 10;
    checkBalance();
    document.querySelector("#account").innerHTML = current;
})

document.querySelector("#transfer10ToWallet").addEventListener("click",function(){
    let current = parseInt(document.querySelector("#account").innerHTML)
    current -= 10;
    document.querySelector("#account").innerHTML = current;
    let wallet = parseInt(document.querySelector("#other-wallet").innerHTML)
    wallet += 10;
    document.querySelector("#other-wallet").innerHTML = wallet;
})

document.querySelector("#transfer10ToAccount").addEventListener("click",function(){
    let wallet = parseInt(document.querySelector("#other-wallet").innerHTML)
    wallet -= 10;
    document.querySelector("#other-wallet").innerHTML = wallet;
    let current = parseInt(document.querySelector("#account").innerHTML)
    current += 10;
    document.querySelector("#account").innerHTML = current;
})

document.querySelector("#spend").addEventListener("click",function(){
    let spentAmount = document.querySelector("#amount").value
    spendAmount = parseInt(spentAmount)
    let wallet = parseInt(document.querySelector("#other-wallet").innerHTML)
    wallet -= spentAmount;
    document.querySelector("#other-wallet").innerHTML = wallet;

})


