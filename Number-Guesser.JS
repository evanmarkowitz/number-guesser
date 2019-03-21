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
var minInputNumber = parseInt(minInput.value);
var maxInputNumber = parseInt(maxInput.value);
var guessInput1 = document.querySelector('#guess-1')
var guessInput2 = document.querySelector('#guess-2')
var c1GuessOutput = document.querySelector('.chall-1-score')
var c2GuessOutput = document.querySelector('.chall-2-score')



function getRandomIntInclusive(minInput, maxInput) {
  minInput = Math.ceil(parseInt(minInput.value));
  maxInput = Math.floor(parseInt(maxInput.value));
  return Math.floor(Math.random() * (maxInput - minInput + 1)) + maxInput; 
}
console.log(getRandomIntInclusive(min,max));

//Updates Current Range on DOM
update.addEventListener('click', function(e) {
	lowOutput.innerText= minInput.value;
	highOutput.innerText= maxInput.value;
	var minInputNumber = parseInt(minInput);

});

//Updates Challenger 1 Name on DOM
submitButton.addEventListener('click', function(e) {
	for (var i = 0 ; i < chall1Name.length ; i++)
	chall1Name[i].innerText = nameInput1.value;
		
});

submitButton.addEventListener('click', function(e) {
  for (var i = 0 ; i < chall2Name.length ; i++)
  chall2Name[i].innerText = nameInput2.value;
    
});

submitButton.addEventListener('click', function(e) {
  c1GuessOutput.innerText = guessInput1.value;
  c2GuessOutput.innerText = guessInput2.value; 
});


//Deletes All Scorecards, just want it to delete 1

remove.addEventListener('click', function(event) {
	for (var i = 0 ; i < scorecard.length ; i++)
	{
	scorecard[i].classList.add('removescorecard');}
});