//1
document.querySelector("#increment").addEventListener("click", function(){
    let count = parseInt(document.querySelector("#box").innerHTML);
    if (count >= 0 && count < 10) {
        count ++;
        document.querySelector("#box").innerHTML = count;
        if (count%2 ==0){
            document.querySelector("#box").style.backgroundColor = "green";
        } else {
            document.querySelector("#box").style.backgroundColor = "red";
        }
    }
})

//2
document.querySelector("#decrement").addEventListener("click", function(){
    let count = parseInt(document.querySelector("#box").innerHTML);
    if (count > 0 && count <= 10) {
        count --;
        document.querySelector("#box").innerHTML = count;
        if (count%2 ==0){
            document.querySelector("#box").style.backgroundColor = "green";
        } else {
            document.querySelector("#box").style.backgroundColor = "red";
        }
    }
})

//3
document.querySelector("#reset").addEventListener("click", function(){
    let count = parseInt(document.querySelector("#box").innerHTML);
    count = 0;
    document.querySelector("#box").innerHTML = count;
})

//4 (edited 1 & 2)

//5

