// Passcode Checker

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // inputs
  let password = document.getElementById("password-in").value;

  // Check Passcode
  if (password.length >= 13) {
    document.getElementById("output").style.backgroundColor = "green";
    document.getElementById("output").innerHTML = "Very Strong";
  } else if (password.length >= 9) {
    document.getElementById("output").style.backgroundColor = "lime";
    document.getElementById("output").innerHTML = "Strong";
  } else if (password.length >= 5) {
    document.getElementById("output").style.backgroundColor = "orange";
    document.getElementById("output").innerHTML = "Okay";
  } else if (password.length >= 1) {
    document.getElementById("output").style.backgroundColor = "red";
    document.getElementById("output").innerHTML = "Weak";
  } else {
    document.getElementById("output").innerHTML = "please provide password";
  }
}
