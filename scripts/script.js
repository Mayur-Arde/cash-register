const bill = document.getElementById('bill-amount');
const next = document.getElementById('next');
const cashGiven = document.getElementById('cash-given');
const check = document.getElementById('check');
const message = document.getElementById('message');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const cashBlock = document.querySelector('.cash-div');
const calTable = document.querySelector('.cal-table ');

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];
// let amountToBeRetured;

// function
// to check valid billvalue and process the next step 
const checkBillInput = function (){
  if (bill.value === ""){
    alert('Enter Bill Amount')
  }else{
    // cashBlock.style.display = 'flex';
    cashBlock.style.visibility = 'visible';
  }
}

// function on check btn 
const calculateCash = function(){
hide();  
if( bill.value > 0){
  if (cashGiven.value > bill.value){
   const amountToBeReturned = cashGiven.value - bill.value;
    // message.innerText =`Balance is ${amountToBeRetured}`
    showMessage(`Balance to return ${amountToBeReturned}`);
    calculateChange(amountToBeReturned);
  }else if ( bill.value === cashGiven.value){
    showMessage(`Balance is Zero, nothing to return`)
  }else{
    showMessage(`Wash dishs`)
  }
}else{
  showMessage(`Invalid Bill amount`);
}
}
// function show(){
function hide(){
  message.style.visibility = 'hidden';
}

// show message
function showMessage(messages){
  message.style.visibility = 'visible';
  message.innerText= messages;
}


// calcuate the change and to the table
const calculateChange = function(amountToBeReturned){
  calTable.style.display = 'block';
  for(let i = 0; i < availableNotes.length ; i++){
    const numberOfNotes =  Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
// }


// eventlisterns
next.addEventListener('click', checkBillInput);
check.addEventListener('click', calculateCash);