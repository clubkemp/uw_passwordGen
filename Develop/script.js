//global variables
// var alphabetChar = "abcdefghijklmnopqrstuvwxyz".split("")
// var upperAlphabetChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
// var numberChar = [1,2,3,4,5,6,7,8,9,0]
// var specialChar = "`~!@#$%^&*()-_+={[}]\\:;\"\'<,>.?/".split("")
var charList = ["abcdefghijklmnopqrstuvwxyz".split(""),"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),[1,2,3,4,5,6,7,8,9,0],"`~!@#$%^&*()-_+={[}]\\:;\"\'<,>.?/".split("")]
console.log(charList);

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
  var include = {};
  
  include.lc = confirm(`Ok to include lower case`);
  include.uc = confirm(`Ok to include upper case`);
  include.numeric = confirm(`Ok to include numeric values`);
  include.special = confirm(`Ok to include speical characters`);
  return include;
};

function generatePassword(){
  var length = pwdLength();
  var criteria = pwdCriteria();
  var possibleChars = []
  var chosenPwdArray = []
  
  if (criteria.lc){
    for(var i=0; i < charList[0].length; i++){
      possibleChars
  .push(charList[0][i])
    }
  }
  if (criteria.uc){
    for(var i=0; i < charList[1].length; i++){
      possibleChars
  .push(charList[1][i])
    }
  }
  if (criteria.numeric){
    for(var i=0; i < charList[2].length; i++){
      possibleChars
  .push(charList[2][i])
    }
  }
  if (criteria.numeric){
    for(var i=0; i < charList[3].length; i++){
      possibleChars
  .push(charList[3][i])
    }
  }
  console.log(possibleChars)
  console.log(length);
  console.log(chosenPwdArray.length);
  
  while(chosenPwdArray.length < length){
    console.log("Running push loop")
    var randomNum = Math.floor(Math.random()*possibleChars.length)
    console.log(randomNum);
    chosenPwdArray.push(possibleChars[randomNum])
  }
  return chosenPwdArray.join("")

  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
