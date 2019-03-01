// list of pokemon
var listOfPokemon = [
	{
		pokemon : './assets/images/sprites/1.gif',
		answer  : 'Cubone',
		false1  : 'Geodude',
		false2  : 'Squirtle',
		false3  : 'Pinsir'
	},
	{
		pokemon : './assets/images/sprites/2.gif',
		answer  : 'Bulbasaur',
		false1  : 'Parasect',
		false2  : 'Gloom',
		false3  : 'Mankey'
	},
	{
		pokemon : './assets/images/sprites/3.gif',
		answer  : 'Mew',
		false1  : 'Jynx',
		false2  : 'Hypno',
		false3  : 'Abra'
	},
	{
		pokemon : './assets/images/sprites/4.gif',
		answer  : 'Pikachu',
		false1  : 'Ratata',
		false2  : 'Nidorino',
		false3  : 'Eevee'
	},
	{
		pokemon : './assets/images/sprites/5.gif',
		answer  : 'Dragonair',
		false1  : 'Ekans',
		false2  : 'Vaporeon',
		false3  : 'Gyarados'
	}
];
var question = 0;
var score = 0;
var incorrect = 0;
var unanswered = 5;
let timeRemaining = '10';
let timer = null;
let x = 10;
function increaseScore() {
	score++;
}
function increaseIncorrect() {
	incorrect++;
}
function decreaseUnanswered() {
	unanswered--;
}
function incrementTimer() {
	console.log(x);
	x--;
	$('#countDown').html('Time Remaining: ' + x);
	if (x == 0) {
		revealMon1();
		clearInterval(timer);
		x = 10;
		timeRemaining = '10';
	}
}
function incrementTimer2() {
	console.log(x);
	x--;
	$('#countDown').html('Time Remaining: ' + x);
	if (x == 0) {
		revealMon2();
		clearInterval(timer);
		x = 10;
		timeRemaining = '10';
	}
}
function incrementTimer3() {
	console.log(x);
	x--;
	$('#countDown').html('Time Remaining: ' + x);
	if (x == 0) {
		revealMon3();
		clearInterval(timer);
		x = 10;
		timeRemaining = '10';
	}
}
function incrementTimer4() {
	console.log(x);
	x--;
	$('#countDown').html('Time Remaining: ' + x);
	if (x == 0) {
		revealMon4();
		clearInterval(timer);
		x = 10;
		timeRemaining = '10';
	}
}
function incrementTimer5() {
	console.log(x);
	x--;
	$('#countDown').html('Time Remaining: ' + x);
	if (x == 0) {
		revealMon5();
		clearInterval(timer);
		x = 10;
		timeRemaining = '10';
	}
}
function startGame() {
	$('#pokemon').html('<img src="./assets/images/sprites/0.gif">');
	$('#answer1').html('<br />');
	$('#answer2').html('<div id="answer" onClick="loadQuestion1();">begin</div>');
	$('#answer3').html('');
	$('#answer4').html('');
	$('#countDown').html('');
}
function loadQuestion1() {
	counter();
	$('#pokemon').html('<img id="sprite" src="' + listOfPokemon[question].pokemon + '">');
	$('#answer3').html(
		'<div onClick="revealMon1();decreaseUnanswered();increaseScore();">' + listOfPokemon[question].answer + '</div>'
	);
	$('#answer2').html(
		'<div onClick="revealMon1();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false1 +
			'</div>'
	);
	$('#answer1').html(
		'<div onClick="revealMon1();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false2 +
			'</div>'
	);
	$('#answer4').html(
		'<div onClick="revealMon1();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false3 +
			'</div>'
	);
	$('#countDown').html('Time Remaining: 10');
	function counter() {
		timer = setInterval('incrementTimer();', 1000);
	}
}
function revealMon1() {
	document.getElementById('sprite').className = 'spriteReveal';
	$('#answer1').html('<br />');
	$('#answer2').html('<div id="itsPokemon">It\'s ' + listOfPokemon[question].answer + ' !</div>');
	$('#answer3').html('<div id="next" onClick="loadQuestion2();">Next</div>');
	$('#answer4').html('');
	$('#countDown').html('');
	clearInterval(timer);
	question++;
	timeRemaining = '10';
}
function loadQuestion2() {
	counter2();
	$('#pokemon').html('<img id="sprite" src="' + listOfPokemon[question].pokemon + '">');
	$('#answer2').html(
		'<div onClick="revealMon2();decreaseUnanswered();increaseScore();">' + listOfPokemon[question].answer + '</div>'
	);
	$('#answer1').html(
		'<div onClick="revealMon2();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false1 +
			'</div>'
	);
	$('#answer3').html(
		'<div onClick="revealMon2();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false2 +
			'</div>'
	);
	$('#answer4').html(
		'<div onClick="revealMon2();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false3 +
			'</div>'
	);
	$('#countDown').html('Time Remaining: 10');
	function counter2() {
		timer = setInterval('incrementTimer2();', 1000);
	}
}
function revealMon2() {
	document.getElementById('sprite').className = 'spriteReveal';
	$('#answer4').html('<br />');
	$('#answer2').html('<div id="itsPokemon">It\'s ' + listOfPokemon[question].answer + ' !</div>');
	$('#answer3').html('<div id="next" onClick="loadQuestion3();">Next</div>');
	$('#answer1').html('<br />');
	$('#countDown').html('');
	clearInterval(timer);
	question++;
	timeRemaining = '10';
}
function loadQuestion3() {
	counter3();
	$('#pokemon').html('<img id="sprite" src="' + listOfPokemon[question].pokemon + '">');
	$('#answer1').html(
		'<div onClick="revealMon3();decreaseUnanswered();increaseScore();">' + listOfPokemon[question].answer + '</div>'
	);
	$('#answer2').html(
		'<div onClick="revealMon3();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false1 +
			'</div>'
	);
	$('#answer3').html(
		'<div onClick="revealMon3();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false2 +
			'</div>'
	);
	$('#answer4').html(
		'<div onClick="revealMon3();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false3 +
			'</div>'
	);
	$('#countDown').html('Time Remaining: 10');
	function counter3() {
		timer = setInterval('incrementTimer3();', 1000);
	}
}
function revealMon3() {
	document.getElementById('sprite').className = 'spriteReveal';
	$('#answer1').html('<br />');
	$('#answer2').html('<div id="itsPokemon">It\'s ' + listOfPokemon[question].answer + ' !</div>');
	$('#answer3').html('<div id="next" onClick="loadQuestion4();">Next</div>');
	$('#answer4').html('');
	$('#countDown').html('');
	clearInterval(timer);
	question++;
	timeRemaining = '10';
}
function loadQuestion4() {
	counter4();
	$('#pokemon').html('<img id="sprite" src="' + listOfPokemon[question].pokemon + '">');
	$('#answer2').html(
		'<div onClick="revealMon4();decreaseUnanswered();increaseScore();">' + listOfPokemon[question].answer + '</div>'
	);
	$('#answer1').html(
		'<div onClick="revealMon4();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false1 +
			'</div>'
	);
	$('#answer3').html(
		'<div onClick="revealMon4();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false2 +
			'</div>'
	);
	$('#answer4').html(
		'<div onClick="revealMon4();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false3 +
			'</div>'
	);
	$('#countDown').html('Time Remaining: 10');
	function counter4() {
		timer = setInterval('incrementTimer4();', 1000);
	}
}
function revealMon4() {
	document.getElementById('sprite').className = 'spriteReveal';
	$('#answer1').html('<br />');
	$('#answer2').html('<div id="itsPokemon">It\'s ' + listOfPokemon[question].answer + ' !</div>');
	$('#answer3').html('<div id="next" onClick="loadQuestion5();">Next</div>');
	$('#answer4').html('');
	$('#countDown').html('');
	clearInterval(timer);
	question++;
	timeRemaining = '10';
}
function loadQuestion5() {
	counter5();
	$('#pokemon').html('<img id="sprite" src="' + listOfPokemon[question].pokemon + '">');
	$('#answer4').html(
		'<div onClick="revealMon5();decreaseUnanswered();increaseScore();">' + listOfPokemon[question].answer + '</div>'
	);
	$('#answer2').html(
		'<div onClick="revealMon5();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false1 +
			'</div>'
	);
	$('#answer3').html(
		'<div onClick="revealMon5();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false2 +
			'</div>'
	);
	$('#answer1').html(
		'<div onClick="revealMon5();decreaseUnanswered();increaseIncorrect();">' +
			listOfPokemon[question].false3 +
			'</div>'
	);
	$('#countDown').html('Time Remaining: 10');
	function counter5() {
		timer = setInterval('incrementTimer5();', 1000);
	}
}
function revealMon5() {
	document.getElementById('sprite').className = 'spriteReveal';
	$('#answer1').html('<br />');
	$('#answer2').html('<div id="itsPokemon">It\'s ' + listOfPokemon[question].answer + ' !</div>');
	$('#answer3').html('<div id="results" onClick="loadResults();">View Results</div>');
	$('#answer4').html('');
	$('#countDown').html('');
	clearInterval(timer);
}
function loadResults() {
	$('#pokemon').html('<img src="./assets/images/sprites/0.gif">');
	$('#answer1').html('Correct Answers : ' + score + '</div>');
	$('#answer2').html('Wrong Answers : ' + incorrect + '</div>');
	$('#answer3').html('Unanswered : ' + unanswered + '</div>');
	$('#answer4').html('<div id="playAgain" onClick="loadQuestion1();">Play Again</div>');
	clearInterval(timer);
	question = 0;
	score = 0;
	incorrect = 0;
	unanswered = 5;
}
