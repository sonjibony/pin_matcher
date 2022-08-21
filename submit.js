document.getElementById('btn-submit').addEventListener('click',function(){
    const generateFieldElement = document.getElementById('generate-field')
    const generateField = generateFieldElement.innerText;

    const typedNumbersElement = document.getElementById('typed-numbers')
const typedNumbers = typedNumbersElement.value;

const correctMsgElement= document.getElementById('correct');
const wrongMsgElement= document.getElementById('wrong');

if(generateField===typedNumbers){
    
    correctMsgElement.style.display= 'block';
    wrongMsgElement.style.display= 'none';
    
}
else{
    
    wrongMsgElement.style.display= 'block';
    correctMsgElement.style.display= 'none';

}

    

})