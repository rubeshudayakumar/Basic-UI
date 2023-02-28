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

    // checking if the first name is empty
    if(firstName.value.trim()==""){
        errorMessage = "First Name is required";
        document.querySelector(".first-section > .error-message").innerHTML = errorMessage;
        firstName.style.borderColor = "#A80000";
        isValid = false;
    }
    
    
    // checking if the last name is empty
    if(lastName.value.trim()==""){
        errorMessage = "Last Name is required";
        document.querySelector(".second-section > .error-message").innerHTML = errorMessage;
        lastName.style.borderColor = "#A80000";
        isValid = false;
    }

    // checking if the email is empty
    if(email.value.trim()==""){
        errorMessage = "Email Address is required";
        document.querySelector("#email-id ~ .error-message").innerHTML = errorMessage;
        email.style.borderColor = "#A80000";
        isValid = false;
    }

    // checking if the contact number is empty
    if(contactNumber.value.trim()==""){
        errorMessage = "Contact Number is required";
        document.querySelector("#contact-number ~ .error-message").innerHTML = errorMessage;
        contactNumber.style.borderColor = "#A80000";
        isValid = false;
    }

    // checking if the pin code is empty
    if(PINCode.value.trim()==""){
        errorMessage = "PIN Code is required";
        document.querySelector("#pin-code ~ .error-message").innerHTML = errorMessage;
        PINCode.style.borderColor = "#A80000";
        isValid = false;
    }

    // checking if the card number is empty
    if(cardNumber.value.trim()==""){
        errorMessage = "Card Number is required";
        document.querySelector("#card-number ~ .error-message").innerHTML = errorMessage;
        cardNumber.style.borderColor = "#A80000";
        isValid = false;
    }

    // checking if the card expiry is empty
    if(cardExpiry.value.trim()==""){
        errorMessage = "Card Expiry is required";
        document.querySelector("#card-expiry ~ .error-message").innerHTML = errorMessage;
        cardExpiry.style.borderColor = "#A80000";
        isValid = false;
    }
    
    // checking if the card cvv is empty
    if(cvv.value.trim()==""){
        errorMessage = "CVV is required";
        document.querySelector("#cvv-number ~ .error-message").innerHTML = errorMessage;
        cvv.style.borderColor = "#A80000";
        isValid = false;
    }

    return isValid;
}