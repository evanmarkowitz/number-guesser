var scorecard = document.querySelectorAll('.scorecard');
var remove = document.querySelector('.remove');
var chall_1= document.querySelector('#chall-1');
var chall_2= document.querySelector('#chall-2');
var minInput = document.querySelector('#min');
var maxInput = document.querySelector('#max');
var lowOutput = document.querySelector('.low')
var highOutput = document.querySelector('.high')
var update = document.querySelector('.update');
var chall1Name = document.querySelectorAll('.challenger-1-name')
var chall2Name = document.querySelectorAll('.challenger-2-name')
var submitButton = document.querySelector('.submit')
var nameInput1 = document.querySelector('#chall-1')
var nameInput2 = document.querySelector('#chall-2')
var randomNumber;


var minInputNumber = parseInt(minInput.value);
var maxInputNumber = parseInt(maxInput.value);
var guessInput1 = document.querySelector('#guess-1')
var guessInput2 = document.querySelector('#guess-2')
var c1GuessOutput = document.querySelector('.chall-1-score')
var c2GuessOutput = document.querySelector('.chall-2-score')
var chall1response = document.querySelector('.chall-1-response')
var chall2response = document.querySelector('.chall-2-response')


function getRandomInt(minValue, maxValue) {
  	randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;};

//Updates Current Range on DOM
update.addEventListener('click', function(e) {
	lowOutput.innerText= minInput.value;
	highOutput.innerText= maxInput.value;
	var maxValue = parseInt(maxInput.value);
	var minValue = parseInt(minInput.value);
	getRandomInt(minValue, maxValue);
	console.log(randomNumber)
});

//Updates Challenger 1 Name on DOM
submitButton.addEventListener('click', function(e) {
	for (var i = 0 ; i < chall1Name.length ; i++)
	chall1Name[i].innerText = nameInput1.value;
		
});
//Updates Challenger 2 Name on Dom
submitButton.addEventListener('click', function(e) {
  for (var i = 0 ; i < chall2Name.length ; i++)
  chall2Name[i].innerText = nameInput2.value;
    
});
//When Click Submit Button 
submitButton.addEventListener('click', function(e) {
  c1GuessOutput.innerText = guessInput1.value;
  c2GuessOutput.innerText = guessInput2.value;
  guessInputValue1 = parseInt(guessInput1.value)
  guessInputValue2 = parseInt(guessInput2.value)
  if (guessInputValue1 && guessInputValue2 === randomNumber)
    {chall1response.innerText = "Its a tie!"}
  else if (guessInputValue1 === randomNumber) {
  chall1response.innerText = "You Won!"
} else if (guessInputValue1 > randomNumber){
  chall1response.innerText = "that's too high" 
} else {
  chall1response.innerText = "that's too low" 
}  
  if (guessInputValue1 && guessInputValue2 === randomNumber)
    {chall2response.innerText = "Its a tie!"}
  else if (guessInputValue2 === randomNumber) {
  chall2response.innerText = "You Won!"
} else if (guessInputValue2 > randomNumber){
  chall2response.innerText = "that's too high" 
} else {
  chall2response.innerText = "that's too low" 
} 

});

// Color change when button click
// document.getElement('button').addEventListener("click", fchangeColor); {
//   this.style.backgroundColor = #D0D2D3;
//   return false;
// }


//Deletes All Scorecards, just want it to delete 1









