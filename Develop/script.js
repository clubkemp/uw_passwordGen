// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function pwdLength(){
  
  var pass = false
  while(!pass){
    pwdLength = prompt("How long would you like your password (choose integer between 8-128?")
    if(pwdLength < 8){
      console.log("Less than 8")
      var pwdLength = alert("Too few")
    }else if(pwdLength > 128){
      console.log("more than 128")
      var pwdLength = alert("Too many")
    }else {
      return pwdLength;
    }
  }
  
};

function criteria {
  var include = {
  'lowercase': true,
  'uppercase': true,
  'numeric': true,
  'special': true,
  }
  for(var i=0; i<4; i++)
  
};

function generatePassword(){
  var length = pwdLength();
  

  console.log(length)
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
