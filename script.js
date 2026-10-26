let username = window.prompt("Enter your name please");

while (
    username === null ||
    username.trim().length < 2 ||
    !isNaN(username)
) {
    username = window.prompt("Enter a valid name, please");
}

document.getElementById("user").textContent = username;