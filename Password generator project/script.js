const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberCase = "1234567890";
const symbolCase = "!@#$%^&*()_+";

let generateBtn = document.querySelector('#generate-btn');
let copyBtn = document.querySelector('#copy-btn');
let passBox = document.querySelector('#password-display');
let totalchar = document.querySelector('#password-length')
let upperInput = document.querySelector('#include-uppercase');
let lowerInput =document.querySelector('#include-lowercase');
let numberInput = document.querySelector('#include-numbers');
let symbolInput =document.querySelector('#include-symbols');


const getRandomPassword= (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}


const generatePassword = (password = " ")=>{
    if(upperInput.checked){
        password += getRandomPassword(upperCase)
    }
    if(lowerInput.checked){
        password += getRandomPassword(lowerCase)
    }
    if(numberInput.checked){
        password += getRandomPassword(numberCase)
    }
    if(symbolInput.checked){
        password += getRandomPassword(symbolCase)
    }
    if(password.length < totalchar.value){
        return generatePassword(password)

    }
    passBox.value= turncate(password,totalchar.value);
}

generateBtn.addEventListener('click' , function(){
    generatePassword();
})

function turncate(str,num){
    if(str.length>num){
        let subStr= str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}
