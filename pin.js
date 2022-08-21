document.getElementById('calculator').addEventListener('click',function(event){

const number = event.target.innerText
const typedNumbersElement = document.getElementById('typed-numbers')
const previousTypedNumbers = typedNumbersElement.value;

if(isNaN(number)){
if(number==='C'){
    typedNumbersElement.value= '';
}
else if(number==='<'){
const digits =previousTypedNumbers.split('');
digits.pop();
const remainingDigits = digits.join('');
typedNumbersElement.value= remainingDigits;
}
}
else{
    
    const newTypedNumbers = previousTypedNumbers+number;
    typedNumbersElement.value= newTypedNumbers;
}

})