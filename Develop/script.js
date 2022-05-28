// User input variables
var enter;
var confirmCharacters;
var confirmNumbers;
var confirmLowercase;
var confirmUppercase;

//Array of special chartacters
var characters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
​
// Array of numeric characters 
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
​
// Array of lowercase characters 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
​
// Array of uppercase characters 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Choices declared outside the if statement to be concatenated upon condition
var userChoices;

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function to generate password
var generatePassword = function() {
  enter = parseInt(window.prompt ("How many characters would you like your password to be? Choose between 8 and 128."));
  // if statement for user validation
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(window.prompt("Password must be between 8 and 128 characters."));
  
  } else {
    confirmLowercase = confirm("Do you want to include Lowercase letters?");
    confirmUppercase = confirm("Do you want to include Uppercase letters?");
    confirmNumbers = confirm("Do you want to include numbers?");
    confirmCharacters = confirm("Do you want to include special characters?");
  };

  // Confirms that at least one criteria is selected
  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmCharacters) {
    window.alert = ("You must select at least one criteria.");
  }

  // Else if statement for 4 criteria selected
  else if (confirmLowercase && confirmUppercase && confirmNumbers && confirmCharacters) {
    choices = characters.concat(numbers, lowerCase, upperCase);
  }

  // Else if statement for 3 criteria selected 
  else if (confirmCharacters && confirmNumbers && confirmUppercase) {
    choices = confirmCharacters.concat(numbers, upperCase);
  }
  else if (confirmCharacters && confirmNumbers && confirmLowercase) {
    choices = confirmCharacters.concat(numbers, lowerCase);
  }
  else if (confirmCharacters && confirmLowercase && confirmUppercase) {
    choices = confirmCharacters.concat(lowerCase, upperCase);
  }
  else if (confirmNumbers && confirmLowercase && confirmUppercase) {
    choices = confirmNumbers.concat(lowerCase, upperCase);
  }

  // else if statement for 2 criteria selected 
  else if (confirmCharacters && confirmNumbers) {
    choices = characters.concat(numbers);
  }
  else if (confirmCharacters && confirmUppercase) {
    choices = characters.concat(upperCase);
  }
  else if (confirmCharacters && confirmLowercase) {
    choices = characters.concat(lowerCase);
  }
  else if (confirmLowercase && confirmNumbers) {
    choices = lowerCase.concat(numbers);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = lowerCase.concat(upperCase);
  }
  else if (confirmNumbers && confirmUppercase) {
    choices = numbers.concat(upperCase);
  }

  // else if for 1 criteria selected 
  else if (confirmCharacters) {
    choices = characters;
  }
  else if (confirmNumbers) {
    choices = numbers;
  }
  else if (confirmLowercase) {
    choices = lowerCase;
  }
  else if (confirmUppercase) {
    choices = upperCase;
  }

  // Generate array with specified characteristics in random order



}
// when all prompts answered then password is generated and shown on page either in alert or written into text area


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword();
