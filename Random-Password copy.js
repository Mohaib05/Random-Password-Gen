const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 14;
 

function generatePassword(){
  let password1 = generateRandomPassword();
  let password2 = generateRandomPassword();

   document.getElementById("password1").value = password1;
   document.getElementById("password2").value = password2; 
}

function getRandomCharacter(){
  let randomCharc = Math.floor(Math.random() * characters.length)
  return characters[randomCharc]
}

function generateRandomPassword() {
  let randomPassword = ""
  for (let i = 0; i < passwordLength; i++) {
      randomPassword += getRandomCharacter()        
  }
  return randomPassword
}

