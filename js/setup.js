'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var playersNameArray = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var playersSurNameArray = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArray = ['black', 'red', 'blue', 'yellow', 'gree'];
var playersArray = createPlayersArray(playersNameArray, playersSurNameArray, coatColorArray, eyesColorArray);
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');


function getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPlayersArray(names, surnames, coatColors, eyesColors) {
  var swapArray = [];
  for (var i = 0; i < 4; i++) {
    swapArray.push(createPlayer(names[getRandomFloat(0, names.length - 1)], surnames[getRandomFloat(0, surnames.length - 1)], coatColors[getRandomFloat(0, coatColors.length - 1)], eyesColors[getRandomFloat(0, eyesColors.length - 1)]));
  }
  return swapArray;
}

function createPlayer(name, surname, coatcolor, eyesColor) {
  return {
    name: name,
    surname: surname,
    coatcolor: coatcolor,
    eyesColor: eyesColor
  };
}

for (var i = 0; i < playersArray.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  similarListElement.appendChild(wizardElement);
  wizardElement.querySelector('.setup-similar-label').textContent = playersArray[i].name + ' ' + playersArray[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = playersArray[i].coatcolor;
  wizardElement.querySelector('.wizard-eyes').style.fill = playersArray[i].eyesColor;
}
