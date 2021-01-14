function clearErrors(){
    for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++){
        if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf('has-') != -1){
            document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function resetForm(){
    clearErrors();
    document.forms["contactForm"]["name"].value = '';
    document.forms["contactForm"]["phone"].value = '';
    document.forms["contactForm"]["email"].value = '';
}

function validateItems(){
    clearErrors();
    var name = document.forms["contactForm"]["name"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var email = document.forms["contactForm"]["email"].value;
    if (name == ""){
        alert("Missing Name contact information!")
        document.forms["contactForm"]["name"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    if (phone == ""){
        alert("Missing Phone number information!")
        document.forms["contactForm"]["phone"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["phone"].focus();
        return false;
    }
    if (email == ""){
        alert("Missing email contact information!")
        document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["email"].focus();
        return false;
    }
}
