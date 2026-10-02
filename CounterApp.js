

const calculateId=document.getElementById("calculate");
const buttonIncrease=document.getElementById("button_in");
const buttonDecrease=document.getElementById("button_de");
const buttonReset=document.getElementById("button_re");

let count=0;
function updateDisplayColor(){



  if(cout>0){
    calculateId.style.color='blue';


} else if (cout<0){
    calculateId.style.color='green';

}  else {
    calculateId.style.color='grey';

}
}

buttonIncrease.addEventListener('click',()=>{
    count++;
    calculateId.textContent=count;
    updateDisplayColor();
});

buttonDecrease.addEventListener('click', ()=>{
    count--;
    calculateId.textContent=count;
    updateDisplayColor();
});
buttonReset.addEventListener('click', ()=> {
    count=0;
    calculateId.textContent=count;
    updateDisplayColor();
})