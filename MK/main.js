"use strict";
const weapon = ['Knight', 'Shuriken', 'Sword', 'Katana', 'Gun'];
const name1 = 'Scorpion'
const name2 = 'Kitana'
const name3 = 'Liukang'
const name4 = 'Sonya'
const name5 = 'Subzero'


const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');


console.log(Math.ceil(Math.random() * 20));

const player1 = {
	player: 1,
	name: name1,
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: (weapon[0]),
	attack: function(name) {
		console.log(name1 + ' ' + ' - Fight...');
	},
	
};
player1.attack();
console.log(player1);


const player2 = {
	player: 2,
	name: name2,
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: (weapon[1]),
	attack: function(name) {
		console.log(name2 + ' ' + ' - Fight...');
	},
	
};
player2.attack();
console.log(player2);


function createElement(tag, className){
	const $tag = document.createElement(tag);

	if (className) {
		$tag.classList.add(className);
	}
	
	return $tag;
};

function createPlayer(playerObj){
	const $player = createElement('div', 'player'+playerObj.player);
	const $progressbar = createElement('div', 'progressbar');
	const $life = createElement('div', 'life');
	const $name = createElement('div', 'name');
	const $character = createElement('div', 'character');
	const $img = createElement('img');

	$life.style.width = playerObj.hp + '%';
	$name.innerText = playerObj.name;
	$img.src = playerObj.img;

	
	$arenas.appendChild($player);

	$player.appendChild($progressbar);

	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$player.appendChild($character);
	$character.appendChild($img);

	return $player;
};

function changeHP(player) {
	const $playerLife = document.querySelector('.player'+ player.player +' .life');
	player.hp -= 10;
	$playerLife.style.width = player.hp + '%';

	if (player.hp < 0) {
		$arenas.appendChild(playerWin(player.name));
	};

	console.log(changeHP);
};

function playerWin(name) {
	const $winTitle = createElement('div', 'winTitle');
	$winTitle.innerText = name + 'win';

	return $winTitle;
	
};

$randomButton.addEventListener('click', function() {
	console.log('###: Click Random Button');
	changeHP(player1);
	changeHP(player2);
});



$arenas.appendChild(createPlayer (player1));
$arenas.appendChild(createPlayer (player2));





