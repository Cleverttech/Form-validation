const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (s) => {
  s.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get values from the inputs and trim for empty spaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(usernameValue === ''){
      //show error by adding error class
      setErrorFor(username, 'Username cannot be empty')
  }else{
      //show success msg by adding success class
      setSuccessFor(username)
  }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error msg inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
}


