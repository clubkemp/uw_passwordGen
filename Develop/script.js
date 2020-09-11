//global character list. Easier to type out the alphabets and then use split to make them into arrays.
var charList = ["abcdefghijklmnopqrstuvwxyz".split(""),"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),[1,2,3,4,5,6,7,8,9,0],"`~!@#$%^&*()-_+={[}]\\:;\"\'<,>.?/".split("")]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//contains the logic for getting the length of desired password
function pwdLength(){
  //setup the stopping variable
  var pass = false
  //as long as pass is false do...
  while(!pass){
    //setup variable for the passworld lenggth, set it equal to the prompt input
    var pwdL = prompt("How long would you like your password (choose integer between 8-128?")
    
    if(isNaN(parseInt(pwdL,10) )){
      alert("You need to put in a number")
    }else{
      if(pwdL < 8){
        console.log("Less than 8")
        alert("Too few")
      }else if(pwdL > 128){
        console.log("more than 128")
        alert("Too many")
      }else {
        return pwdL;
      }
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
