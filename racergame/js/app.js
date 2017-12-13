$(document).ready(function () {
    $(document).keyup(handleKeyPress);


function handleKeyPress (e) {
  if (e.which == 49) {                  //player 1 controls
    movePlayer(1);
  }

  if (e.which == 50) {                  //player 2 controls
    movePlayer(2);
  }
}

function movePlayer (playerInt) {
  var cell = $('.player' + playerInt);         //check each row for win
  var nextCell = $(cell).next();

  checkForVictory(nextCell, playerInt);

  cell.removeClass();
  nextCell.addClass('player' + playerInt);
}

function checkForVictory (nextCell, playerInt) {
   if (!$(nextCell).is('td')) {                     //checks for victory
    alert('Player ' + playerInt + ' wins!');
    window.location.reload();
  }
}


$('html, body').css({
    overflow: 'hidden',       //disables scrolling
    height: '100%'            //disables scrolling
});

});
