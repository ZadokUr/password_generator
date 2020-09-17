var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}


var password = document.getElementById("password");
var copyButton = document.getElementById("copyButton");
var resetButton = document.getElementById("resetButton");
var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");

var generateButton = document.getElementById("generateButton");

generateButton.onclick = ()=>{
  if(uppercase.checked && lowercase.checked && numbers.checked && !symbols.checked) password.innerHTML = generatePasswordLowerUpperNumber(slider.value);
  else if (uppercase.checked && lowercase.checked && symbols.checked && !numbers.checked) password.innerHTML = generatePasswordLowerUpperSymbol(slider.value);
  else if(uppercase.checked && numbers.checked && symbols.checked && !lowercase.checked) password.innerHTML = generatePasswordUpperNumberSymbol(slider.value);
  else if(lowercase.checked && numbers.checked && symbols.checked && !uppercase.checked) password.innerHTML = generatePasswordLowerNumberSymbol(slider.value);
  else if(uppercase.checked && numbers.checked && !lowercase.checked && !symbols.checked) password.innerHTML = generatePasswordUpperNumber(slider.value);
  else if(lowercase.checked && numbers.checked && !uppercase.checked && !symbols.checked) password.innerHTML = generatePasswordLowerNumber(slider.value);
  else if(uppercase.checked && symbols.checked && !lowercase.checked && !numbers.checked)  password.innerHTML = generatePasswordUpperSymbol(slider.value);
  else if(lowercase.checked && symbols.checked && !uppercase.checked && !numbers.checked) password.innerHTML = generatePasswordLowerSymbol(slider.value);
  else if(numbers.checked && symbols.checked && !lowercase.checked && !uppercase.checked) password.innerHTML = generatePasswordNumberSymbol(slider.value);
  else if(uppercase.checked && lowercase.checked && !numbers.checked && !symbols.checked) password.innerHTML = generatePasswordLowerUpper(slider.value);
  else if(uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked) password.innerHTML = generatePasswordUpper(slider.value);
  else if(lowercase.checked && !uppercase.checked && !numbers.checked && !symbols.checked) password.innerHTML = generatePasswordLower(slider.value);
  else if(numbers.checked && !lowercase.checked && !uppercase.checked && !symbols.checked) password.innerHTML = generatePasswordNumber(slider.value);
  else if(symbols.checked && !lowercase.checked && !numbers.checked && !uppercase.checked) password.innerHTML = generatePasswordSymbol(slider.value);
  else  password.innerHTML = generatePassword(slider.value);
}

resetButton.onclick =()=>{
  generateButton.click();
}

copyButton.onclick = ()=>{
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("password"));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById("password"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Password copied");
    window.getSelection().removeAllRanges();
  }
}

//generate an all-lowerase password
function generatePasswordLower(len) {
  var str = "";
  while (str.length <= len) { // Loop `len` times
    var rand = Math.floor(Math.random() * (26) + 97);
    str += String.fromCharCode(rand);
  }
  return str;
}

//generate an all-uppercase password
function generatePasswordUpper(len) {
  var str = "";
  while (str.length <= len) { // Loop `len` times
    var rand = Math.floor(Math.random() * (26) + 65);
    str += String.fromCharCode(rand);
  }
  return str;
}
//generate an all-numeric password
function generatePasswordNumber(len) {
  var str = "";
  while (str.length <= len) { // Loop `len` times
    var rand = Math.floor(Math.random() * (10) + 48);
    str += String.fromCharCode(rand);
  }
  return str;
}
//generate a password full of symbols
// the symbols are found in four different ranges on the ASCII table (33-47, 58-64, 91-96, 123-126)
// a number between 0-4 is randomly selected, then a symbol from that particular range (as indexed above), is selected
function generatePasswordSymbol(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 4);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (15) + 33)
      str += String.fromCharCode(rand)
    } else if (randRange === 1) {
      var rand = Math.floor(Math.random() * (7) + 58)
      str += String.fromCharCode(rand)
    } else if (randRange === 2) {
      var rand = Math.floor(Math.random() * (6) + 91)
      str += String.fromCharCode(rand)
    } else {
      var rand = Math.floor(Math.random() * (4) + 123)
      str += String.fromCharCode(rand)
    }
  }
  return str;
}
//generates a password containing lowercase, uppercase and symbols
function generatePasswordLowerUpperSymbol(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 6);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (15) + 33)
      str += String.fromCharCode(rand)
    } else if (randRange === 1) {
      var rand = Math.floor(Math.random() * (7) + 58)
      str += String.fromCharCode(rand)
    } else if (randRange === 2) {
      var rand = Math.floor(Math.random() * (6) + 91)
      str += String.fromCharCode(rand)
    } else if (randRange === 3) {
      var rand = Math.floor(Math.random() * (4) + 123)
      str += String.fromCharCode(rand)
    } else if (randRange === 4) {
      var rand = Math.floor(Math.random() * (26) + 65);
      str += String.fromCharCode(rand);
    } else {
      var rand = Math.floor(Math.random() * (26) + 97);
      str += String.fromCharCode(rand);
    }
  }
  return str;
}

//generate password made of upper-case and symbols
function generatePasswordUpperSymbol(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 5);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (15) + 33)
      str += String.fromCharCode(rand)
    } else if (randRange === 1) {
      var rand = Math.floor(Math.random() * (7) + 58)
      str += String.fromCharCode(rand)
    } else if (randRange === 2) {
      var rand = Math.floor(Math.random() * (6) + 91)
      str += String.fromCharCode(rand)
    } else if (randRange === 3) {
      var rand = Math.floor(Math.random() * (4) + 123)
      str += String.fromCharCode(rand)
    } else {
      var rand = Math.floor(Math.random() * (26) + 65);
      str += String.fromCharCode(rand);
    }
  }
  return str;
}

//generate password made of lower-case and symbols
function generatePasswordLowerSymbol(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 5);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (15) + 33)
      str += String.fromCharCode(rand)
    } else if (randRange === 1) {
      var rand = Math.floor(Math.random() * (7) + 58)
      str += String.fromCharCode(rand)
    } else if (randRange === 2) {
      var rand = Math.floor(Math.random() * (6) + 91)
      str += String.fromCharCode(rand)
    } else if (randRange === 3) {
      var rand = Math.floor(Math.random() * (4) + 123)
      str += String.fromCharCode(rand)
    } else {
      var rand = Math.floor(Math.random() * (26) + 97);
      str += String.fromCharCode(rand);
    }
  }
  return str;
}
//generate password made of numbers and symbols
function generatePasswordNumberSymbol(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 5);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (15) + 33)
      str += String.fromCharCode(rand)
    } else if (randRange === 1) {
      var rand = Math.floor(Math.random() * (7) + 58)
      str += String.fromCharCode(rand)
    } else if (randRange === 2) {
      var rand = Math.floor(Math.random() * (6) + 91)
      str += String.fromCharCode(rand)
    } else if (randRange === 3) {
      var rand = Math.floor(Math.random() * (4) + 123)
      str += String.fromCharCode(rand)
    } else {
      var rand = Math.floor(Math.random() * (10) + 48);
      str += String.fromCharCode(rand);
    }
  }
  return str;
}
//generate password made of numbers and symbols and lowercase
function generatePasswordLowerNumberSymbol(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 6);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (15) + 33)
      str += String.fromCharCode(rand)
    } else if (randRange === 1) {
      var rand = Math.floor(Math.random() * (7) + 58)
      str += String.fromCharCode(rand)
    } else if (randRange === 2) {
      var rand = Math.floor(Math.random() * (6) + 91)
      str += String.fromCharCode(rand)
    } else if (randRange === 3) {
      var rand = Math.floor(Math.random() * (4) + 123)
      str += String.fromCharCode(rand)
    } else if (rand === 4) {
      var rand = Math.floor(Math.random() * (26) + 65);
      str += String.fromCharCode(rand);
    } else {
      var rand = Math.floor(Math.random() * (10) + 48);
      str += String.fromCharCode(rand);
    }
  }
  return str;
}
//generate password made of numbers and symbols and uppercase
function generatePasswordUpperNumberSymbol(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 6);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (15) + 33)
      str += String.fromCharCode(rand)
    } else if (randRange === 1) {
      var rand = Math.floor(Math.random() * (7) + 58)
      str += String.fromCharCode(rand)
    } else if (randRange === 2) {
      var rand = Math.floor(Math.random() * (6) + 91)
      str += String.fromCharCode(rand)
    } else if (randRange === 3) {
      var rand = Math.floor(Math.random() * (4) + 123)
      str += String.fromCharCode(rand)
    } else if (rand === 4) {
      var rand = Math.floor(Math.random() * (26) + 97);
      str += String.fromCharCode(rand);
    } else {
      var rand = Math.floor(Math.random() * (10) + 48);
      str += String.fromCharCode(rand);
    }
  }
  return str;
}

//generate password made of upper and lowercase letters
function generatePasswordLowerUpper(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 2);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (26) + 65)
      str += String.fromCharCode(rand)
    } else {
      var rand = Math.floor(Math.random() * (26) + 97)
      str += String.fromCharCode(rand)
    }
  }
  return str;
}

function generatePasswordLowerUpperNumber(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 3);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (26) + 65)
      str += String.fromCharCode(rand)
    } else if (randRange === 1) {
      var rand = Math.floor(Math.random() * (26) + 97)
      str += String.fromCharCode(rand)
    } else {
      var rand = Math.floor(Math.random() * (10) + 48);
      str += String.fromCharCode(rand);
    }
  }
  return str;
}
//generate password of lowercase letters and numbers
function generatePasswordLowerNumber(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 2);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (10) + 48)
      str += String.fromCharCode(rand)
    } else {
      var rand = Math.floor(Math.random() * (26) + 97)
      str += String.fromCharCode(rand)
    }
  }
  return str;
}
//generate password of uppercase letters and numbers
function generatePasswordUpperNumber(len) {
  var str = "";
  while (str.length <= len) {
    var randRange = Math.floor(Math.random() * 2);
    if (randRange === 0) {
      var rand = Math.floor(Math.random() * (26) + 65)
      str += String.fromCharCode(rand)
    } else {
      var rand = Math.floor(Math.random() * (10) + 48)
      str += String.fromCharCode(rand)
    }
  }
  return str;
}

//generate password with all parameters
function generatePassword(len) {
  var str = "";
  while (str.length <= len) { // Loop `len` times
    var rand = Math.floor(Math.random() * (94) + 33);
    str += String.fromCharCode(rand);
  }
  return str;
}