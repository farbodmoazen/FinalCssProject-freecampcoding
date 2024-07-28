const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const btnSubmitEl = document.getElementById("btn-s-el");
const messageEl = document.getElementById("message");
const formEl = document.getElementById("form-el");
const nameErrorEl = document.getElementById("name-error");
const emailErrorEl = document.getElementById("email-error");
const messageErrorEl = document.getElementById("message-error");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameValue = nameEl.value.trim();
  let emailValue = emailEl.value.trim();
  let messageValue = messageEl.value.trim();

  // Regular expression for email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let hasError = false; // Flag to track if there are any validation errors

  // Validate name input
  if (nameValue.length < 3) {
    nameEl.classList.add("error");
    nameErrorEl.style.display = "block";
    if (!hasError) {
      nameEl.focus(); // Focus the first invalid field
      hasError = true;
    }
  } else {
    nameEl.classList.remove("error");
    nameErrorEl.style.display = "none";
  }

  // Validate email input
  if (!emailPattern.test(emailValue)) {
    emailEl.classList.add("error");
    emailErrorEl.style.display = "block";
    if (!hasError) {
      emailEl.focus();
      hasError = true;
    }
  } else {
    emailEl.classList.remove("error");
    emailErrorEl.style.display = "none";
  }

  // Validate message input
  if (messageValue.length < 30) {
    messageEl.classList.add("error");
    messageErrorEl.style.display = "block";
    if (!hasError) {
      messageEl.focus();
      hasError = true;
    }
  } else {
    messageEl.classList.remove("error");
    messageErrorEl.style.display="none";
  }

  // If no errors, submit the form or perform other actions
  if (hasError===true) {
    e.preventDefault();}
  else{
    alert('Form submitted successfully!');
    formEl.submit();
  }
});
