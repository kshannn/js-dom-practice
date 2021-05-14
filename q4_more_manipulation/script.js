// 1
document.querySelector("h1").style.color = "green";

// 2
document.querySelector("li.finished").innerText = "Repay credit card debt";

// 3
document.querySelector("#urgent").style.cssText = "border-width:2px; border-color:black";

// 4
document.querySelector(".emphasis").style.textDecoration = "underline";

// 5
let paragraphEmphasis = document.querySelector("p.emphasis")
paragraphEmphasis.style.backgroundColor = "orange";
paragraphEmphasis.style.fontSize = "32px";
paragraphEmphasis.style.lineHeight = "24px";

// 6
document.querySelector("#urgent > .todo").style.backgroundColor = "yellow";

// 7
document.querySelector("h2").innerHTML = `<span class="greetings">About Us</span>`;

