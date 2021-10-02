// selecting all the elements
const bill = document.getElementById('bill-amount');
const next = document.getElementById('next');
const cashGiven = document.getElementById('cash-given');
const check = document.getElementById('check');
const message = document.getElementById('message');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const cashBlock = document.querySelector('.cash-div');
const calTable = document.querySelector('.cal-table ');

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

// function

// to check valid billvalue and process the next step 
const checkBillInput = function (){
  if (bill.value === ""){
    alert('Enter Bill Amount')
  }else{
    cashBlock.style.visibility = 'visible';
  }
}

// function on check btn 
const calculateCash = function(){
hide();  
let billValue = +bill.value;
let cashValue = +cashGiven.value;
if( billValue > 0){
  if (cashValue > billValue){
   const amountToBeReturned = cashValue - billValue;
    showMessage(`Balance to return ${formatMoney(amountToBeReturned)}`, 'success');
    calculateChange(amountToBeReturned);
  }else if ( billValue === cashValue){
    showMessage(`Balance is Zero, nothing to return`);
  }else if (cashValue < billValue){
    showMessage(`Get more money`,'danger');
  }
}else{
  showMessage(`Invalid Bill amount`,'danger');
}
}
// function show(){
function hide(){
  message.style.visibility = 'hidden';
}

// show message
function showMessage(messages, colors){
  message.style.visibility = 'visible';
  message.innerText= messages;
  message.classList.add(colors);
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

// indian ruppe format 
function formatMoney (number){
  return '₹' +  number.toFixed(2).replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
}


// eventlisterns
next.addEventListener('click', checkBillInput);
check.addEventListener('click', calculateCash);