console.log("Xin Chao T2508M!");
function sayHello(name) {
  console.log("Hello " + name);
}

function sum(a, b) {
  console.log(a + b);
  return a + b;
}

function multiply(a, b) {
  console.log(a * b);
  return a * b;
}

function loop_for(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
function changeBackgroundColor(color) {
  random = Math.random();
  console.log(random);
  document.body.style.backgroundColor = `#$Math.floor(random*16777215).toString(16)`;
}
function validateInput(param) {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  //Username is required
  if (username == "" || username == null || username.length == 0) {
    document.getElementById("warningText").innerText = "Username is required";
    return false;
  }
  //Password is required
  else if (password == "" || password == null || password.length == 0) {
    document.getElementById("warningText").innerText = "Password is required";
    return false;
  } else if (password.length < 8) {
    document.getElementById("warningText").innerText =
      "Password must be at least 8 characters";
    return false;
  }
}
function Login() {
  console.log("Login function called");
  if (validateInput() === false) {
    return false;
  } else {
    alert("Login successfully");
  }
}
function Login() {
  console.log("Login function called");
  if (validateInput() === false) {
    return false;
  } else {
    alert("Login successfully");
    document.getElementById("loginBtn").style.backgroundColor = "green"; // đổi màu
    document.getElementById("loginBtn").style.color = "white"; // đổi chữ
  }
}
