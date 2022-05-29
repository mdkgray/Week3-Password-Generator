// User input variables
var enter;
var confirmSpecial;
var confirmNumbers;
var confirmLowercase;
var confirmUppercase;

//Array of special chartacters
var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters 
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Choices declared outside the if statement to be concatenated upon condition
var userChoices;

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function to generate password
var generatePassword = function () {
  var confirmCharacters;
  var goodInput1 = false;
  while (goodInput1 == false) {
    // Test will be null if cancel, empty string if no value, or the entered text.
    var test = window.prompt("How many characters would you like your password to be? Choose between 8 and 128.");
    // Cancel
    if (test == null) {
      window.alert("You must choose the length of your password.");
    } else if (test.length == 0) {
      // empty text
      window.alert("You must choose the length of your password.");
    } else {
      // All good
      var text = test;
      var confirmCharacters = parseInt(text);
      if (Number.isNaN(confirmCharacters) == true) {
        window.alert("That is not an number. Try again.");
      }
      if (confirmCharacters < 8 || confirmCharacters > 128) {
        window.alert("Password must be between 8 and 128 characters. Try again.")
      } else {
        goodInput1 = true;
      }    
}


 
}
     

  // now do the next question

  // Here, I now have all my inputs because it's all good input.
  var mypasswd = '';
  // Now I need to use the input to generate the mypasswd string using the input data e.g. Math floor 

  // And when I am done I return it, and it appears in the box.
  return mypasswd;


  // confirmNumbers;
  // var goodInput2 = false;
  // while (goodInput2 == false) {
  //   var test = window.prompt("Do you want to include")
  // }
  /// Commented out reference code

    // confirmNumbers = confirm("Do you want to include numbers?");
    // confirmSpecial = confirm("Do you want to include special characters?");
    // confirmLowercase = confirm("Do you want to include lowercase letters?");
    // confirmUppercase = confirm("Do you want to include lowercase letters?");
    
  // // Confirms that at least one criteria is selected
  // if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmCharacters) {
  //   window.alert = ("You must select at least one criteria.");
  // }
  
  // // Else if statement for 4 criteria selected
  // else if (confirmLowercase && confirmUppercase && confirmNumbers && confirmCharacters) {
  //   choices = characters.concat(numbers, lowerCase, upperCase);
  // }
  
  // // Else if statement for 3 criteria selected 
  // else if (confirmCharacters && confirmNumbers && confirmUppercase) {
  //   choices = confirmCharacters.concat(numbers, upperCase);
  // }
  // else if (confirmCharacters && confirmNumbers && confirmLowercase) {
  //   choices = confirmCharacters.concat(numbers, lowerCase);
  // }
  // else if (confirmCharacters && confirmLowercase && confirmUppercase) {
  //   choices = confirmCharacters.concat(lowerCase, upperCase);
  // }
  // else if (confirmNumbers && confirmLowercase && confirmUppercase) {
  //   choices = confirmNumbers.concat(lowerCase, upperCase);
  // }
  
  // // else if statement for 2 criteria selected 
  // else if (confirmCharacters && confirmNumbers) {
  //   choices = characters.concat(numbers);
  // }
  // else if (confirmCharacters && confirmUppercase) {
  //   choices = characters.concat(upperCase);
  // }
  // else if (confirmCharacters && confirmLowercase) {
  //   choices = characters.concat(lowerCase);
  // }
  // else if (confirmLowercase && confirmNumbers) {
  //   choices = lowerCase.concat(numbers);
  // }
  // else if (confirmLowercase && confirmUppercase) {
  //   choices = lowerCase.concat(upperCase);
  // }
  // else if (confirmNumbers && confirmUppercase) {
  //   choices = numbers.concat(upperCase);
  // }
  
  // // else if for 1 criteria selected 
  // else if (confirmCharacters) {
  //   choices = characters;
  // }
  // else if (confirmNumbers) {
  //   choices = numbers;
  // }
  // else if (confirmLowercase) {
  //   choices = lowerCase;
  // }
  // else if (confirmUppercase) {
  //   choices = upperCase;
  // }
  
  // Generate array with specified characteristics in random order
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}