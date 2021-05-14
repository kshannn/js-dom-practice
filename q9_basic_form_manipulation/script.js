
function getFormValues() {

    // 1 
    let email = document.querySelector("#email-address").value;

    // 2 
    let modelRadioButtons = document.querySelectorAll(".phone-type");
    let model = null;
   
    for (let element of modelRadioButtons){
        if (element.checked == true){
            model = element.value;
            break;
        }
    }
   
    // 3
    
    let servicesArray = document.querySelectorAll(".services")
    let services = [];
    for (let element of servicesArray){
        if (element.checked == true){
            services.push(element.value);
        }
    }
   
    // 4
    let pickup = document.querySelector("#pick-up").value;

    // leave this line alone!
    return [email, model, services, pickup];

}

getFormValues();

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
