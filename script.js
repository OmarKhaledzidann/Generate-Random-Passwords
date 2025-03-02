const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 8;
let passEl = document.getElementById("generated-Pass");

let confirmationPass = document.getElementById("copied-Pass")
let messageEl = document.getElementById("copy-message");

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generateRandomPassword() {
    let password = ""; 
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomCharacter();
    }
    // Wrap password inside <span>
    passEl.innerHTML = `<span class="password-text">${password}</span>
                        <img src="copy2.png" class="copy-icon" onclick="copyPassword()">`;

    confirmationPass.textContent = ""
}


function copyPassword() {
    let copiedPassword = passEl.querySelector(".password-text").textContent.trim();
    confirmationPass.textContent = copiedPassword;
    
        // Show success message
        messageEl.style.display = "block";

        // Hide message after 2 seconds
        setTimeout(() => {
            messageEl.style.display = "none";
        }, 2000);

}
