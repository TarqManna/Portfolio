// JavaScript Document

// Card data
const cardsArray = [{
    'name': 'BugBunny',
    'img': 'img/bugsbunny.png',
  },
  {
    'name': 'DaffyDuck',
    'img': 'img/daffy-duck.png',
  },
  {
    'name': 'WileECoyote',
    'img': 'img/Wile_e_coyote.png',
  },
  {
    'name': 'RoadRunner',
    'img': 'img/Roadrunner.png',
  },
  {
    'name': 'Sylvester',
    'img': 'img/Sylvest.png',
  },
  {
    'name': 'Tweety',
    'img': 'img/tweety.png',
  },
  {
    'name': 'ElmerFudd',
    'img': 'img/ElmerFudd.png',
  },
  {
    'name': 'FoghornLeghorn',
    'img': 'img/FoghornLeghorn2.png',
  },
  {
    'name': 'MarvinTheMartian',
    'img': 'img/MarvDaMart.png',
  },
  {
    'name': 'PorkyThePig',
    'img': 'img/Porky_Pig.png',
  },
  {
    'name': 'TazmanianDevil',
    'img': 'img/Taz-dev.png',
  },
  {
    'name': 'YosemiteSam',
    'img': 'img/Yosemite_Sam.png',
  },
];

// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array...
cardsArray.forEach(item => {
  // Create a div
  const card = document.createElement('div');

  // Apply a card class to that div
  card.classList.add('card');

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
});

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

// For each item in the gameGrid array...
gameGrid.forEach(item => {
  // ...
	
// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());
	
	
