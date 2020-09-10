//global variables
var alphabetChar = "abcdefghijklmnopqrstuvwxyz".split("")
var upperAlphabetChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numberChar = [1,2,3,4,5,6,7,8,9,0]
var specialChar = "`~!@#$%^&*()-_+={[}]\\:;\"\'<,>.?/".split("")
var possibleChar = ["abcdefghijklmnopqrstuvwxyz".split(""),"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),[1,2,3,4,5,6,7,8,9,0],"`~!@#$%^&*()-_+={[}]\\:;\"\'<,>.?/".split("")]
console.log(possibleChar);
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

function pwdCriteria() {
  var include = {
  lc: true,
  uc: true,
  numeric: true,
  special: true,
  }
  
  
  include.lc = confirm(`Ok to include lower case`)
  include.uc = confirm(`Ok to include upper case`)
  include.numeric = confirm(`Ok to include numeric values`)
  include.special = confirm(`Ok to include speical characters`)
  return include;
};

function generatePassword(){
  var length = pwdLength();
  var criteria = pwdCriteria();
  var masterPass = []

  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
