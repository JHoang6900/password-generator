// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var password_lowercase = confirm('Include lowercase characters?');
  var password_uppercase = confirm('Include uppercase characters?');
  var password_numeric = confirm('Include numeric characters?');
  var password_special_chars = confirm('Include special characters?');
  var valid_counter = 0;
    
    if (password_lowercase){
      password_lowercase = "abcdefghijklmnopqrstuvwxyz";
      valid_counter++;
    } else {
      var password_lowercase = "";
    }
  
    if(password_uppercase){
      var password_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      valid_counter++;
    } else {
      var password_uppercase = "";
    }
  
    if(password_numeric){
      var password_numeric = "0123456789"
      valid_counter++;
    } else {
      var password_numeric = "";
    }
  
    if(password_special_chars){
      var password_special_chars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
      valid_counter++;
    } else {
      var password_special_chars = "";
    }
  
  //   console.log('password_length :>> '+ password_length + ' characters.')
    console.log('password_lowercase :>>', password_lowercase);
    console.log('password_uppercase :>>', password_uppercase);
    console.log('password_numeric :>>', password_numeric);
    console.log('password_special_chars :>>', password_special_chars);
  
  
  var password_length = prompt('How many characters will your password contain?');
  console.log('password_length is ~> '+ password_length + ' characters.');
  console.log('adding +1 to password_length...', password_length++);
  console.log('password_length +1 is ~> ', password_length);


  if (parseInt(password_length) >= 9 && (parseInt(password_length)) <= 129) {
    console.log('this is a valid number.')
  } else {
    window.alert("Invalid input! Please select a number 8-128!");
    return;
  }

  if (valid_counter >= 2){
    console.log('two out of four character types are included. password is will be safe.');
  } else {
    window.alert("That's not a very safe password. 🤨 Choose at least two character types!");
    return;
  }
  
  var allowed_characters = password_lowercase + password_uppercase + password_numeric + password_special_chars;
  console.log('allowed_characters ~>', allowed_characters);
  
  var finalPass = ''
  
  for ( var i = 0; i < password_length; i++ ) {
  
      var random_number = Math.floor(Math.random() * allowed_characters.length);
      console.log('picking a random number between 0 and '+ allowed_characters.length + '.' , random_number);
      
      
      var index = random_number;
      console.log(`The character at index ${index} is ${allowed_characters.charAt(index)}`);
  
      finalPass += allowed_characters.charAt(index);
   }
   console.log(finalPass);
   return finalPass;
}


// min and max character lengths 
// validate inputs 