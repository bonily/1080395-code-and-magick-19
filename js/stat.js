'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var X_FOR_SHAPE = 100;
var Y_FOR_SHAPE = 10;
var FONT = '16 px PT MONO';
var GAP = 20;
var BAR_HEIGHT = 150;
var COLUMM_WIDTH = 40;
var COLUMM_GAP = 50;

function renderShape(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function renderText(ctx, text, font, color, x, y, textAlign) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = textAlign;
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
}

function renderColumm(ctx, x, y, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, COLUMM_WIDTH, height);
}

function getMaxElement(arr) {
  var currentArray = arr.map(function (elem) {
    return (typeof elem === 'number') ? elem : 0;
  });
  return Math.round(Math.max.apply(null, currentArray));
}

function getColor(player) {
  var randomNumber = Math.random();
  return (player === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsla' + '(207, 100%, 44%, ' + randomNumber + ')';
}

function renderCloud(ctx, x, y) {
  renderShape(ctx, x + 10, y + 10, 'rgba(0, 0, 0, 0.7)');
  renderShape(ctx, x, y, '#fff');
}

window.renderStatistics = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, X_FOR_SHAPE, Y_FOR_SHAPE);
  renderText(ctx, 'Ура вы победили!', FONT, '#000', X_FOR_SHAPE + CLOUD_WIDTH / 2, Y_FOR_SHAPE * 2, 'center');
  renderText(ctx, 'Список результатов:', FONT, '#000', X_FOR_SHAPE + CLOUD_WIDTH / 2, Y_FOR_SHAPE * 2 + GAP, 'center');

  for (var i = 0; i < players.length; i++) {
    var currentTime = Math.round(times[i]);
    var colummHeight = BAR_HEIGHT * currentTime / maxTime;
    var colummX = X_FOR_SHAPE + COLUMM_GAP + (COLUMM_GAP + COLUMM_WIDTH) * i;
    var coluumY = Y_FOR_SHAPE + (BAR_HEIGHT - colummHeight) + GAP * 3;

    renderColumm(ctx, colummX, coluumY, colummHeight, getColor(players[i]));
    renderText(ctx, players[i], FONT, '#000', colummX, BAR_HEIGHT + GAP * 4, 'left');
  }
};
