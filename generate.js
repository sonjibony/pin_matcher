document.getElementById('btn-pin').addEventListener('click',function(){
    const generateFieldElement = document.getElementById('generate-field')
    const generateField = generateFieldElement.innerText
  let pin= Math.round( Math.random()*10000)+''
if(pin.length===4){
    generateFieldElement.innerText= pin
}



})