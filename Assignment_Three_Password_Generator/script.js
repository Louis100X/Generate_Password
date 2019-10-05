
function passwordGenerate() {
var characterLength = prompt("Password length must be between 8 and 128 characters");
var specialCharacters = prompt("Please enter at LEAST one of the following chracters: !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
var numericCharacters = prompt("Please enter at LEAST one numeric character.");
var lowerCase = prompt("Please enter at LEAST one lower case character." );
var upperCase = prompt("Please enter at LEAST one upper case character.");
var generatedPassword = ("Here is your generated password. Please keep it safe! " + characterLength + specialCharacters + numericCharacters + lowerCase + upperCase);

alert(generatedPassword);

document.getElementsByClassName("displayedPassword").write(generatedPassword);
}
