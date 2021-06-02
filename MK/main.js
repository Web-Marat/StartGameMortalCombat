"use strict";
const weapon = ['Knight', 'Shuriken', 'Sword', 'Katana', 'Gun'];
const name1 = 'Scorpion'
const name2 = 'Kitana'
const name3 = 'Liukang'
const name4 = 'Sonya'
const name5 = 'Subzero'


const player1 = {
	name: name1,
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: (weapon[0]),
	attack: function() {
		console.log(name1 + ' fight ' + name2 + ' - Fight...');
	}
};
player1.attack();
console.log(player1);


const player2 = {
	name: name2,
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: (weapon[1]),
	attack: function() {
		console.log(name2 + ' fight ' + name1 + ' - Fight...');
	}
};
player2.attack();
console.log(player2);




function createPlayer(player1, Scorpion){
	const $player1 = document.createElement('div');
	$player1.classList.add('player1');


	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');

	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = '100%';

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = 'Scorpion';

	const $character = document.createElement('div');
	$character.classList.add('character');

	const $img = document.createElement('img');
	$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

	const playerScorpion = {
		name: name1,
		hp: 100,
		img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
		weapon: (weapon[0]),
		attack: function() {
			console.log(name1 + ' fight ' + name2 + ' - Fight...');
		}
	};
	playerScorpion.attack();
	console.log(playerScorpion);




	$player1.appendChild($progressbar);

	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$player1.appendChild($character);
	$character.appendChild($img);



	const $root = document.querySelector('.arenas');
	$root.appendChild($player1);
}

createPlayer('player1', 'Scorpion', 50, 'playerScorpion');


