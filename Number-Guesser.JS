var scorecard = document.querySelectorAll('.scorecard');
var remove = document.querySelector('.remove');
var chall_1= document.querySelector('#chall-1');
var chall_2= document.querySelector('#chall-2');
var min = document.querySelector('#min');
var max = document.querySelector('#max');
var low = document.querySelector('.low')
var update = document.querySelector('.update');



remove.addEventListener('click', function(event) {
	for (var i = 0 ; i < scorecard.length ; i++)
	{
	scorecard[i].classList.add('removescorecard');}
});

update.addEventListener('click', function(event) {
	min.value = low.innerText; 
});



