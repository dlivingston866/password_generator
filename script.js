//Initialize variables
let char = 'abcdefghijklmnopqrstuvwxyz';
let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = '0123456789';
let sym = '@#$%^&*()+={}[]|\><?/';
let charNum = document.getElementById('charNum');

//Set variables
let upperCaseBox = document.getElementById('upCase')
let numBox = document.getElementById('num');
let symBox = document.getElementById('sym');
let generate = document.getElementById('generate');
let yourPw = document.getElementById('yourPw');

//Add event listener
generate.addEventListener('click', function(e) {
    let characters = char;
    (upperCaseBox.checked) ? characters += upCase: '';
    (numBox.checked) ? characters += num: '';
    (symBox.checked) ? characters += sym: '';

    yourPw.value = password(charNum.value, characters);
});
//Generate Password Function
function password(l, characters) {
    let pwd = '';
    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}