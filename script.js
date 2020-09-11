//global character list. Easier to type out the alphabets and then use split to make them into arrays.
var charList = [
  "abcdefghijklmnopqrstuvwxyz".split(""),
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  "`~!@#$%^&*()-_+={[}]\\:;\"'<,>.?/".split(""),
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//contains the logic for getting the length of desired password
function pwdLength() {
  //setup the stopping variable
  var pass = false;
  //as long as pass is false do...
  while (!pass) {
    //setup variable for the passworld lenggth, set it equal to the prompt input
    var pwdL = prompt(
      "How long would you like your password (choose integer between 8-128?"
    );
    //Check if user put in a number
    if (isNaN(parseInt(pwdL, 10))) {
      //if not a number ask for a number
      alert("You need to put in a number");
    } else {
      //check if password length
      if (pwdL < 8) {
        //if less than 8
        alert("Too few");
      } else if (pwdL > 128) {
        //if more the n128
        alert("Too many");
      } else {
        //in the right length range return the number to uses in generatePassword Function
        return pwdL;
      }
    }
  }
}

//setup function for gathering the password criteria
function pwdCriteria() {
  //empty object to hold our criteria
  var include = {
    lc: false,
    uc: false,
    numeric: false,
    special: false,
  };
  
  //setup a while loop that will prompt until at least 1 criteria is chosen
  while(include){
    //for each criteria set the wether to include it to true with the ok statement
    include.lc = confirm(`Ok to include lower case`);
    include.uc = confirm(`Ok to include upper case`);
    include.numeric = confirm(`Ok to include numeric values`);
    include.special = confirm(`Ok to include speical characters`);
    //If no criteria is chosen alert and restart while loop
    if(!include.lc && !include.uc && !include.numeric && !include.speical){
      alert("Must choose at least 1 criteria")
    }//else return the criteria and break loop if at least 1 criteria is chosen
    else{
      return include;
    };
  }
  //return the object for use in generatePassword function
  
}

//Fisher-Yates shuffler
Array.prototype.shuffle = function () {
  //input is Array.prototype
  var input = this;
  //iterate through the array, but do it backwards starting with the last item
  for (var i = input.length - 1; i >= 0; i--) {
    //grab a random index, behind the item we are shuffling
    var randomIndex = Math.floor(Math.random() * (i + 1));
    //grab a rando index where it is going to go
    var itemAtIndex = input[randomIndex];
    //swap the positions
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};

function generatePassword() {
  //set length to result of helper function
  var length = pwdLength();
  //set criteria to result of helper function
  var criteria = pwdCriteria();
  //empty arrays for what is possible, and what will be the password
  var chosenPwdArray = [];

  //create a while loop that will load characters into our password array until the length criteria is met
  while (chosenPwdArray.length < length) {
    //each if statment checks to see if the criteria is met
    if (criteria.lc) {
      //if met, get the length of that sub-array in the character list and randomly pick one out
      var randomNum = Math.floor(Math.random() * charList[0].length);
      //once picked out push it to the password array
      chosenPwdArray.push(charList[0][randomNum]);
    }
    if (criteria.uc) {
      var randomNum = Math.floor(Math.random() * charList[1].length);
      chosenPwdArray.push(charList[1][randomNum]);
    }
    if (criteria.numeric) {
      var randomNum = Math.floor(Math.random() * charList[2].length);
      chosenPwdArray.push(charList[2][randomNum]);
    }
    if (criteria.special) {
      var randomNum = Math.floor(Math.random() * charList[3].length);
      chosenPwdArray.push(charList[3][randomNum]);
    }
    //since this is a while statement it will hit each one that qualifies and push a character to it, ensuring it has at least 1 of every matching criteria character
  }
  console.log(chosenPwdArray);
  //now shuffle the password so it doesn't follow a pattern
  var shufflePassword = chosenPwdArray.shuffle();
  //return the password, but not as an array, as a string joined by nothing.
  return shufflePassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
