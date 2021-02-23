// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variable Declaration
function generatePassword() {
  //var number=
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //var lowercase=
  var lowercase = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
  //var uppercase=
  var uppercase = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"];
  //var specail=
  var special = ["!, @, #, $, %, &, ?"];

  var passwordLength = parseInt(prompt("How long should the password be?"))
    // console.log(passwordLength)
    
    
    if(passwordLength <= 7 || passwordLength >= 129 || isNaN(passwordLength)){
      alert("Password has to be between 8 and 128 characters")
      
      return
    }
    //Password parameters
    var specialCharacters = confirm("Do you want special characters?");
    // console.log(specialCharacters);

    var lowercaseLetters = confirm("Do you want any lowercase letters?");
    // console.log(lowercaseLetters);

    var uppercaseLetters = confirm("Do you want uppercase letters?");
    // console.log(uppercaseLetters);

    var numericCharacters = confirm("Do you want numbers?");
    // console.log(numericCharacters);
        //if false
      if(specialCharacters === false && lowercaseLetters === false && uppercaseLetters === false && numericCharacters === false) {
        alert("You must pick at least one parameter");

      var specialCharacters = confirm("Do you want special characters?");
    //   console.log(specialCharacters);

      var lowercaseLetters = confirm("Do you want any lowercase letters?");
    //   console.log(lowercaseLetters);

      var uppercaseLetters = confirm("Do you want uppercase letters?");
    //   console.log(uppercaseLetters);

      var numericCharacters = confirm("Do you want numbers?");
    //   console.log(numericCharacters);

        return
      }
    //Action for password
      var passwordCharacters = []

    if (specialCharacters) {
      passwordCharacter = passwordCharacters.concat(special);
    }

    if (lowercaseLetters) {
      passwordCharacters = passwordCharacters.concat(lowercase);
    }

    if (uppercaseLetters) {
      passwordCharacter = passwordCharacter.concat(uppercase);
    }

    if (numericCharacters) {
      passwordCharacters = passwordCharacters.concat(number);
    }

    console.log(passwordCharacters);

    var randomPassword = ""

    for(var i=0; i<passwordLength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }

    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
