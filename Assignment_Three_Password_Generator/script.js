
function passwordGenerate() {

    var generatedPassword;
    var specialCharactersResult = "";
    var numericCharactersResults = "";
    var lowerCaseResults = "";
    var upperCaseResults = "";


    var characterLength = parseInt(prompt("Enter the length of password. Must be between 8 and 128 characters"));

    console.log(characterLength);
    console.log(Number.isInteger(characterLength));

if(Number.isInteger(characterLength)== false ) {
    alert ("Please enter a valid number");
    return;
}
if (characterLength < 8 || characterLength > 128) {
        alert("Password length must be between 8 and 128 characters");
        return;
}
    var specialCharacters = confirm("Would you like at LEAST one of the following chracters: !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    if (specialCharacters) {
    var specialList = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    specialCharactersResult = specialList.substr(Math.floor(specialList.length*Math.random()), 1)
    }
console.log(specialCharactersResult);

    var numericCharacters = confirm("Would you like at LEAST one numeric character?");
    if (numericCharacters) {
        var specialList2 = "0123456789";
        numericCharactersResults = specialList2.substr(Math.floor(specialList2.length*Math.random()), 1);
    }
console.log(numericCharactersResults);
    var lowerCase = confirm("Would you like at LEAST one lower case character?");
    if (lowerCase) {
        var specialList3 = "qwertyuiopasdfghjklzxcvbnm";
        lowerCaseResults = specialList3.substr(Math.floor(specialList3.length*Math.random()), 1);
    }
console.log(lowerCaseResults);
    var upperCase = confirm("Would you like at LEAST one upper case character?");
    if (upperCase) {
        var specialList4 = "QWERTYUIOPASDFGHJKLZXCVBNM";
        upperCaseResults = specialList4.substr(Math.floor(specialList4.length*Math.random()), 1);
    }
console.log(upperCaseResults);

generatedPassword = upperCaseResults + lowerCaseResults + numericCharactersResults + specialCharactersResult;

console.log(upperCaseResults.length +"1");
console.log(numericCharactersResults.length +"2");
console.log(lowerCaseResults.length + "3");
console.log(specialCharactersResult.length + "4");

console.log(generatedPassword);
console.log(generatedPassword.length);
if (generatedPassword.length == 0 ) {
    alert("Insufficient data has been selected in order to generate a password." );
    return;
}

while (generatedPassword.length < characterLength) {
    if (specialCharacters) {
        generatedPassword = generatedPassword + specialList.substr(Math.floor(specialList.length*Math.random()), 1)
    }
    else if (numericCharacters) {
        generatedPassword = generatedPassword + specialList3.substr(Math.floor(specialList3.length*Math.random()), 1);
    }
    else if (upperCase) {
        generatedPassword = generatedPassword + specialList4.substr(Math.floor(specialList4.length*Math.random()), 1);
    }
    else {
        generatedPassword = generatedPassword + specialList3.substr(Math.floor(specialList3.length*Math.random()), 1);
    }
}



alert(generatedPassword);
}

///while (generatedPassword.length < characterLength) generatedPassword = generatedPassword; alert(generatedPassword);