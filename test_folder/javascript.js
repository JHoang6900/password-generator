function generatePassword(){


console.log('i am not broken.')

  console.log('password_lowercase :>>', password_lowercase);
  console.log('password_uppercase :>>', password_uppercase);
  console.log('password_numeric :>>', password_numeric);
  console.log('password_special_chars :>>', password_special_chars);


var password_length = prompt('How many characters will your password contain?');
console.log('password_length is ~> '+ password_length + ' characters.');
console.log('adding +1 to password_length...', password_length++);
console.log('password_length +1 is ~> ', password_length);


if (parseInt(password_length) > 7) {
  console.log('this is a valid number.')
} else {
  console.alert("Invalid input! Please select a number 8-128!");
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

 // min/max 8-126 characters for password_length
 // 1 of each of the 4 character types 



 // if password lowercase = true 
	// - include lowercase letters in finalPass

  // if password uppercase = true
  //   - include uppercase letters in finalPass
  
  // if password numeric = true
  //   - include numbers in finalPass
  
  // if password specialchars = true
  //   - include specialchars in finalPass
  
  // finalPass =
  // lowercase: true
  // uppercase: true
  // numeric: true
  // specialchars = true 
  
  // randomly select from possiblechars for(x) amount of times
  // print: finalPass



  // ====================================================


// var password_lowercase = confirm('Include lowercase characters?');
// var password_uppercase = confirm('Include uppercase characters?');
// var password_numeric = confirm('Include numeric characters?');
// var password_special_chars = confirm('Include special characters?');
  
//   if (password_lowercase){
//     password_lowercase = "abcdefghijklmnopqrstuvwxyz";
//   } else {
//     var password_lowercase = "";
//   }

//   if(password_uppercase){
//     var password_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   } else {
//     var password_uppercase = "";
//   }

//   if(password_numeric){
//     var password_numeric = "0123456789"
//   } else {
//     var password_numeric = "";
//   }

//   if(password_special_chars){
//     var password_special_chars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
//   } else {
//     var password_special_chars = "";
//   }