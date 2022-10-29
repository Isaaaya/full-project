// const e = require("express");

// (function () {
  const nameInput = document.querySelector(".client-name");
  const phoneInput = document.querySelector(".client-phone");
  const emailInput = document.querySelector(".client-email");
  const nameError = document.querySelector(".client-name-error");
  const phoneError = document.querySelector(".client-phone-error");
  const emailError = document.querySelector(".client-email-error");
  const dateError = document.querySelector(".client-date-error");
  const submitError = document.querySelector(".submit-error");

  function validateName() {
    const name = document.querySelector(".client-name").value;
    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (name.length < 5) {
        nameError.innerHTML = "Name must consist of at least 5 letters";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Enter a full name";
        return false;
    }
   else {
    nameError.classList.add("success");
    nameError.innerHTML = "<span class='success'>✓</span>";
    return true;
   }
  }
  
  function validatePhone() {
    const phone = document.querySelector(".client-phone").value;
    if (phone.length === 0) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone must consist of 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits";
        return false;
    }
   else {
    phoneError.classList.add("success");
    phoneError.innerHTML = "<span class='success'>✓</span>";
    return true;
   }
  }

  function validateEmail() {
    const email = document.querySelector(".client-email").value;
    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email is invalid";
        return false;
    }
   else {
    emailError.classList.add("success");
    emailError.innerHTML = "<span class='success'>✓</span>";
    return true;
   }
  }


  function validateForm() {
    if (!validateName()) {
        nameInput.classList.add("red-border");
        return false;
    }
    else if (!validatePhone()) {
        phoneInput.classList.add("red-border");
        return false;
    }
    else if (!validateEmail()) {
        emailInput.classList.add("red-border");
        return false;
    }
  }

// }
// )()