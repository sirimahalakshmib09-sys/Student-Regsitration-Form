//Sucess Message
    const form=document.getElementById("form");
    const success=document.getElementById("success");
    const formView = document.getElementById("form-view");
    function display(event)
{
    event.preventDefault();
    if(validateForm())
    {
    success.style.display="block";
    }
}
    form.addEventListener("submit",display);
//Close Button
    const closebtn=document.getElementById("closebtn");
    function closeCard()
{
    form.reset();
    resetErrors();
    success.style.display="none";
}
    closebtn.addEventListener("click",closeCard);
//Validations
    function validateForm()
{
    //Takes user input from HTML file
    const firstname=document.getElementById("firstname").value;
    const lastname=document.getElementById("lastname").value;
    const regdno=document.getElementById("regdno").value;
    const dob=document.getElementById("dob").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const address=document.getElementById("address").value;

    //Creating empty space ti display error message if validation fails 
    const firstnameerr=document.getElementById("firstname-error");
    const lastnameerr=document.getElementById("lastname-error");
    const regdnoerr=document.getElementById("regdno-error");
    const doberr=document.getElementById("dob-error");
    const emailerr=document.getElementById("email-error");
    const phoneerr=document.getElementById("phone-error");
    const addresserr=document.getElementById("address-error");


    //Giving cleaning space with nomold error messages after they click submit
    firstnameerr.textContent="";
    lastnameerr.textContent="";
    regdnoerr.textContent="";
    doberr.textContent="";
    emailerr.textContent="";
    phoneerr.textContent="";
    addresserr.textContent="";

    //If validation is true it sets to true else false
    let isValid=true;

    //Checking Conditions 
    //firstname validation
    if(firstname==="")
    {
        firstnameerr.textContent="Please enter your name";
        isValid=false;
    }
    else if(/\d/.test(firstname))
    {
        firstnameerr.textContent="Please enter letters only";
        isValid=false;
    }
    //lastname validation
    if(lastname==="")
    {
        lastnameerr.textContent="Please enter your name.";
        isValid=false;
    }
    else if(/\d/.test(lastname))
    {
        lastnameerr.textContent="Please enter letters only.";
        isValid=false;
    }
    //regdno validation
    if(regdno==="")
    {
        regdnoerr.textContent="Please enter your registration number";
        isValid=false;
    }
    //dob validation
    if (dob === "") 
    {
        doberr.textContent = "Please select your date of birth.";
        isValid = false;
    }
    //email validation
    if (email === "") 
    {
        emailerr.textContent = "Please enter your email address.";
        isValid = false;
    } 
    else if (!email.includes("@") || !email.includes(".")) 
    {
        emailerr.textContent = "Please enter a valid email (must include @ and .).";
        isValid = false;
    }
    //phone validation
    if (phone === "") 
    {
        phoneerr.textContent = "Please enter your phone number.";
        isValid = false;
    } 
    else if(phone.length!=10 || isNaN(phone))
    {
        phoneerr.textContent = "Please enter 10 digit valid phone number.";
        isValid = false;
    }
    //address validation
    if(address==="")
    {
        addresserr.textContent="Please enter your address";
        isValid=false;
    }
    return isValid;
}

//Reset Function for validation
     function resetErrors()
     {
    document.getElementById("firstname-error").textContent = "";
    document.getElementById("lastname-error").textContent = "";
    document.getElementById("regdno-error").textContent = "";
    document.getElementById("dob-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("address-error").textContent = "";
     }
