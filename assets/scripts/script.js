// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//random full number function, because math.random is confusing and dumb
function randomInt(max) {
  var result = Math.random() * max;
  result = Math.floor(result);
  return result;
}


//generate password
function generatePassword() {
  var password = "";
  var passwordChars = [];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var specialChars = ['"', "'", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\\", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var passwordLength;
  var validLength = false;
  var allFalse = true;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumbers = false;
  var includeSpecial = false;

  //prompt how many characters, more than 8, less than 128, and make sure it's a number, loop if it doesn't meet requirements.
  while (validLength == false) {
    passwordLength = prompt("How many characters would you like in the password?");
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8) {
      alert("Password must have at least 8 characters.");
    } else if (passwordLength > 128) {
      alert("Password must have no more than 128 characters.");
      //check if it is NaN
    } else if (!passwordLength) {
      alert("Please enter a number.")
    } else {
      validLength = true;
    }
  }
  console.log(passwordLength)


  //ask if you want lowercase, uppercase, numerical, and special characters. make sure to loop if none are selected.
  while (allFalse == true){
  includeLowercase = confirm("Include lowercase letters?");
  includeUppercase = confirm("Include uppercase letters?");
  includeNumbers = confirm("Include numbers?");
  includeSpecial = confirm("Include special characters?");
  //check if all are false, if they are, notice user and loop back
  if(!includeLowercase&& !includeUppercase && !includeNumbers && !includeSpecial){
    alert("You need to have at least one character type 💀")
  } else {allFalse = false}
  }
  console.log(includeLowercase, includeUppercase, includeNumbers, includeSpecial)

  //generate password with all the info provided
  //concat all possible characters into one array
  if(includeLowercase){
    passwordChars = passwordChars.concat(lowercase);
  }
  if(includeUppercase){
    passwordChars = passwordChars.concat(uppercase);
  }
  if(includeNumbers){
    passwordChars = passwordChars.concat(numbers);
  }
  if(includeSpecial){
    passwordChars = passwordChars.concat(specialChars);
  }
  console.log(passwordChars)
  //generate password using random index of passwordChars, and length specified from user

  for(var i = 0; i < passwordLength; i++){
    console.log(password)
    password = password.concat(passwordChars[randomInt(passwordChars.length)])
  }
  console.log(password);

  //return password
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
