function generatePassword() {
    var siteName = document.getElementById("siteName").value;
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < 20; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("password").innerHTML = "Contraseña generada: " + password;
    var listItem = document.createElement("li");
    listItem.textContent = siteName + " - " + password;
    document.getElementById("password-list").appendChild(listItem);
}

function downloadPasswords() {
    var passwords = document.getElementById("password-list").innerText;
    var blob = new Blob([passwords], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "passwords.txt";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
