const inputField = document.getElementById('text-input');
const bttn = document.getElementById('check-btn');
const ans = document.getElementById('result');
function palindromeChecker() {
    let regex = /[\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    let userInput1 = inputField.value;
    let userInput = inputField.value.replace(regex,"").toLowerCase();

    if(userInput === ""){
        alert("Please input a value");
    }
    if (userInput === userInput.split("").reverse().join("")) {
        ans.innerText = `${userInput1} is a palindrome`
    }else {
        ans.innerText = `${userInput1} is not a palindrome`
    }
    inputField.value = "";
}

bttn.addEventListener('click', palindromeChecker);
