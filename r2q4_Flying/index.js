function extractFormInfo()
{
  
  let firstName = document.querySelector("#fName").value
  
  let lastName = document.querySelector("#lName").value
  
  let ticketClass = null;
  let ticketClassSelector = document.querySelectorAll(".ticketClasses")
  for (let ticket of ticketClassSelector){
    if (ticket.checked){
      ticketClass = ticket.value
    }
  }
  
  let options = []
  let optionsArray = document.querySelectorAll(".flightOptions")
  for (let option of optionsArray){
    if (option.checked){
      options.push(option.value)
    }
  }
  
  console.log(firstName)
  console.log(lastName)
  console.log(ticketClass)
  console.log(options)
}


let btn = document.querySelector("button")
btn.addEventListener("click",function(){
  extractFormInfo();
})