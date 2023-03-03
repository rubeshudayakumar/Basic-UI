function validate(){
    // assuming form values as initially true and valid 
    let isValid = true;

    // retrieving all the form data entered by  the user
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email-id");
    let contactNumber = document.getElementById("contact-number");
    let PINCode = document.getElementById("pin-code");
    let cardNumber = document.getElementById("card-number");
    let cardExpiry = document.getElementById("card-expiry");
    let cvv = document.getElementById("cvv-number");



    // function validateInput()

    function validateInput(inputObject,regEx,errorMessageEmpty,errorMessageInValid,selectorString){
        var errorMessageSpan = document.querySelector(selectorString);

        if(inputObject.value.trim()==""){
            errorMessageSpan.innerHTML = errorMessageEmpty;
            inputObject.style.borderColor = "#A80000";
            isValid = false;
        }
        else if((regEx).test(inputObject.value)==false){
            errorMessageSpan.innerHTML = errorMessageInValid;
            inputObject.style.borderColor = "#A80000";
            isValid = false;
        }else{
            errorMessageSpan.innerHTML = "";
            inputObject.style.borderColor = "#CCCCCC";
        }
    }

    validateInput(firstName,/^[a-zA-Z]{1,30}$/g,"First Name is required","First Name is not valid",".first-section > .error-message");
    validateInput(lastName,/^[a-zA-Z]{1,30}$/g,"Last Name is required","Last Name is not valid",".second-section > .error-message");
    validateInput(email,/^[A-z]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email Address is required","Email Address is not valid","#email-id ~ .error-message");
    validateInput(contactNumber,/^[0-9]{10}$/,"Contact Number is required","Contact Number is not valid","#contact-number ~ .error-message");
    validateInput(PINCode,/^[0-9]{6}$/,"PIN Code is required","PIN Code is not valid","#pin-code ~ .error-message");
    validateInput(cardNumber,/^[0-9]{16}$/,"Card Number is required","Card Number is not valid","#card-number ~ .error-message");
    validateInput(cardExpiry,/^[0-9]{4}$/,"Card Expiry is required","Card Expiry is not valid","#card-expiry ~ .error-message");

    if(parseInt(cardExpiry.value)<2023){
        errorMessage = "Card Expiry is not valid";
        document.querySelector("#card-expiry ~ .error-message").innerHTML = errorMessage;
        cardExpiry.style.borderColor = "#A80000";
        isValid = false;
    }

    validateInput(cvv,/^[0-9]{3,4}$/,"CVV is required","CVV is not valid","#cvv-number ~ .error-message");

    return isValid;
}