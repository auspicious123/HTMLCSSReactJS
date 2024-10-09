document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phone-number").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  if (!firstName) {
    document.getElementById("first-name-error").innerText = "First name is required";
    document.getElementById("first-name-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("first-name-error").style.display = "none";
  }

  if (!lastName) {
    document.getElementById("last-name-error").innerText = "Last name is required";
    document.getElementById("last-name-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("last-name-error").style.display = "none";
  }

  if (!validateEmail(email)) {
    document.getElementById("email-error").innerText = "Invalid email address";
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("email-error").style.display = "none";
  }

  if (!validatePhoneNumber(phoneNumber)) {
    document.getElementById("phone-number-error").innerText = "Invalid phone number";
    document.getElementById("phone-number-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("phone-number-error").style.display = "none";
  }

  if (password.length < 8) {
    document.getElementById("password-error").innerText =
      "Password must be at least 8 characters long";
    document.getElementById("password-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("password-error").style.display = "none";
  }

  if (isValid) {
    console.log({
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: email,
      password: password,
    });
    alert("Form data has been logged to the console.");
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
  const re = /^[0-9]{10}$/;
  return re.test(String(phoneNumber));
}
