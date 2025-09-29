document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");


form.addEventListener("submit", function (event){
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  feedbackDiv.style.display = 'block';

  let isValid = true;
 let messages = [];

 if(username.length < 3){
    messages.push(" Username must be at least 3 characters");
    isValid = false;
 }
 const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 if(!regex.test(email)){
    messages.push(" Email must be includes @ and . symbols");
    isValid = false;
 }
 if(password.length < 8){
    messages.push(" Password must be at least 8 characters");
    isValid = false;
 }
if(isValid){
feedbackDiv.textContent = "Registration successful!";
feedbackDiv.style.color = "#28a745";
}else{
    feedbackDiv.innerHTML  = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
}
});

});
