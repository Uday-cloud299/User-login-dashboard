```javascript
function login() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        document.getElementById("message").innerHTML =
            "Please fill all fields!";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user").innerHTML = "Username: " + username;
        document.getElementById("mail").innerHTML = "Email: " + email;

        document.getElementById("message").innerHTML = "Login Successful!";
    }
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").innerHTML = "Logged out!";
}
```
