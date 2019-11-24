
var myIndex = 0;
var result= 0;

//carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
function runValidate(form){
  validateName(form);
    validateEmail(form);
  validateNumber(form);
 display(form);
}

function validateName(form){
  var name = form.elements["fullname"];
  
  
  if(name.validity.valueMissing){                 
      name.setCustomValidity("Please enter your name here");
  }
  else{
      name.setCustomValidity("");
      result++;
      
  }
}
function validateEmail(form){
  var email= form.elements["email"];
  
  if(email.validity.valueMissing){
  email.setCustomValidity("Please enter your email id here");
  
  }
  else if(email.validity.typeMismatch){
  email.setCustomValidity("Please enter the right email format.");
  
}
else{
   email.setCustomValidity("");
   result++;
}
}
function validateNumber(form){
  var PhoneNumber = document.getElementById("Call_number");
  
  if(PhoneNumber.validity.valueMissing){      
      PhoneNumber.setCustomValidity("Please enter your Mobile number.");
     
  }
  else if(PhoneNumber.validity.patternMismatch){
      // check whether the input provided match 
      // the pattern or not
      PhoneNumber.setCustomValidity("Enter a valid 10 digit mobile numer");
  }
  else{
      PhoneNumber.setCustomValidity("");
      result++;
  }

}
function display(form)
{
    var object;
    object= document.getElementById("fullname").value;
    if(result==3){
    alert("Thank you for the details "+ object +"\n" +"Your Message is noted and we'll get back to you shortly.");
    }
}