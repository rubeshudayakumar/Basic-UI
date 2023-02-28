function validate(){
    // assuming form values as initially true and valid 
    let isValid = true;

    // retrieving all the form data entered by  the user
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email-id");
    let contactNumber = document.getElementById("contact-number");
    let 

    // checking if the first name is empty
    if(firstName.value==""){
        errorMessage = "First Name is required";
        document.querySelector(".first-section > .error-message").innerHTML = errorMessage;
        firstName.style.borderColor = "#A80000";
        isValid = false;
    }
    
    // checking if the last name is empty
    if(lastName.value==""){
        errorMessage = "Last Name is required";
        document.querySelector(".second-section > .error-message").innerHTML = errorMessage;
        lastName.style.borderColor = "#A80000";
        isValid = false;
    }

    // checking if the email is empty
    if(email.value==""){
        errorMessage = "Email Address is required";
        document.querySelector("#email-id ~ .error-message").innerHTML = errorMessage;
        email.style.borderColor = "#A80000";
        isValid = false;
    }

    // checking if the contact number is empty
    if(contactNumber.value==""){
        errorMessage = "Contact Number is required";
        document.querySelector("#contact-number ~ .error-message").innerHTML = errorMessage;
        contactNumber.style.borderColor = "#A80000";
        isValid = false;
    }



    return isValid;
}