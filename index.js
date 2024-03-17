let terms = document.getElementById("t&c");
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let viewPassword = document.getElementById("show-password");



userName.addEventListener("blur", blurEvent, false);
confirmPassword.addEventListener("blur", passwordBlurEvent, false);






function showPassword(){
    if(viewPassword.checked){
    console.log(viewPassword);
    password.type = "text";
    confirmPassword.type = "text";
    } 
    else{
      // console.log(viewPassword);
      console.log(password);
    password.type = "password";
    confirmPassword.type = "password";
}
}
function blurEvent(element){
  let userNameAlert = document.getElementById("userName-alert");
  if(element.target.value == ""){
    userNameAlert.style.visibility = "visible";
    userNameAlert.textContent = "Please enter in this field";
    userNameAlert.style.color = "red";
  }
  
  if(element.target.value != ""){
    userNameAlert.style.visibility = "hidden";
  }
}

function passwordBlurEvent(element){
  let passwordAlert = document.getElementById("password-alert");
  if(password.value != confirmPassword.value || password.value == "" || confirmPassword.value == ""){
    passwordAlert.style.visibility = "visible";
        passwordAlert.textContent = "Password doesn't match";
        passwordAlert.style.color = "red";
      }
      else{
        passwordAlert.style.visibility = "hidden";
      }
    }
    
    
    function validate(){
      
      let invalid_cases = 0;
      let userNameAlert = document.getElementById("userName-alert");
      if(userName.value == ""){
        userNameAlert.style.visibility = "visible";
        userName.setAttribute("required", "true");
        invalid_cases++;
      }
      
      
      let passwordAlert = document.getElementById("password-alert");
      if(password.value != confirmPassword.value || password.value == "" || confirmPassword.value == ""){
        passwordAlert.style.visibility = "visible";
        passwordAlert.textContent = "Password doesn't match";
        passwordAlert.style.color = "red";
        invalid_cases++;
      }
      else{
      passwordAlert.style.visibility = "hidden";
      }

  
  
    let msg = document.getElementById("alert");
    if(!terms.checked){
    msg.textContent = "Please accept our terms and conditions";
    terms.setAttribute("requifed", "true");
    msg.style.visibility = "visible";
    invalid_cases++;
    }
    if(terms.checked){
    msg.style.visibility = "hidden";
    }
    
    let radioAlert = document.getElementById("radio-alert");
    let isRadioSelected = document.querySelector('input[name="gender"]:checked');
    console.log(isRadioSelected);
    if(!isRadioSelected){
      invalid_cases++;
      radioAlert.style.visibility = "visible";
    }
    else{
      radioAlert.style.visibility = "hidden";
    }
  
  
    if(invalid_cases == 0){
      return true;
    }
    return false;
}