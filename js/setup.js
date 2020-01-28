'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var playersNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var playersSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'gree'];
var players = createplayers();
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var similarList = createSimilarList(players);

setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createplayers() {
  var result = [];
  for (var i = 0; i < 4; i++) {
    result.push(createPlayer());
  }
  return result;
}

function createPlayer() {
  return {
    name: playersNames[getRandomInteger(0, playersNames.length - 1)],
    surname: playersSurnames[getRandomInteger(0, playersSurnames.length - 1)],
    coatcolor: coatColors[getRandomInteger(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomInteger(0, eyesColors.length - 1)]
  };
}

function createSimilarList(wizards) {
  return wizards.map(function createWizard(obj) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = obj.name + ' ' + obj.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = obj.coatcolor;
    wizardElement.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
    return wizardElement;
  });
}

for (var i = 0; i < players.length; i++) {
  similarListElement.appendChild(similarList[i]);
}
