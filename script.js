let formRegistration = document.getElementById("form-registration");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let repeatPassword = document.getElementById("repeatPassword");
let submitBtn = document.getElementById("submitBtn");
let formLogIn = document.getElementById("form-login");
let emailInputSec = document.getElementById("emailInputSec");
let passwordInputSec = document.getElementById("passwordInputSec");

formRegistration.addEventListener("submit", (event) => {
    event.preventDefault();

    let validatedEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    let validatedPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;


    if (!validatedEmail.test(emailInput.value)) {
        alert("invalid email");
    }
    if (!validatedPassword.test(passwordInput.value)) {
        alert("invalid password");
    }
    if (passwordInput.value !== repeatPassword.value) {
        alert("password does not match");
    }

    let user = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("you have successfully registered");
    formRegistration.style.display = "none";
    formLogIn.style.display = "block";
});
let registeredUser = JSON.parse(localStorage.getItem("user"));
formLogIn.addEventListener("submit", (event) => {
    event.preventDefault();


    if (emailInputSec.value === registeredUser.email &&
        passwordInputSec.value === registeredUser.password
    ) {
        alert("Congrats");
    } else {
        alert("Something Went Wrong");
    }
})