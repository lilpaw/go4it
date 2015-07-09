$(document).ready(function() {
//if click_counter is odd, display "Player one go!"
  //if odd, div color change to red
  //if click_counter is even, display "player two"
  //if even, div color change to black
  //if click_counter >42, game ends

  var click_counter = 1;
  var clickLocation = {};

  $('.container').on("click", '.col', function(event){
    clickLocation = $(event.target);
    addClickCounter();
    notifyPlayerTurn();
    addPieceToColumn();
    verticalCheck();
  });

  //check for vertical winner

  var verticalCheck = function(){
    // need to replace way of collecting group - only adds to group if clicked above the target, but not on the target
    clickLocation = $(event.target);
    vertGroup = $(currentColumn(clickLocation)).children();
    console.log(vertGroup);
    vertColorsArray = []

    for(var i=0; i < vertGroup.length; i++) {
      vertColorsArray.push(vertGroup[i].classList[2]);
      // console.log(vertColorsArray);
    };

    var vertColorsString = vertColorsArray.join('');
      blkWin = (/blackblackblackblack/)
      redWin = (/redredredred/)

    if(blkWin.test(vertColorsString) === true || redWin.test(vertColorsString) === true) {
        alert(currentPlayer + " is a winner! Moop Moop!")
    };
  };

  var addClickCounter = function(){
    click_counter ++;
    $(".click_counter").text(click_counter);

  };

  var playerOne = 'red';
  var playerTwo = 'black';
  currentPlayer = playerOne;

  var notifyPlayerTurn = function(){
    $('.p1').toggleClass('hide');
    $('.p2').toggleClass('hide');
    if(click_counter % 2 != 0){
      // $('.col').css({'background-color': 'pink'})
      currentPlayer = playerTwo;
    }
    else{
      // $('.col').css({'background-color': 'gray'})
      currentPlayer = playerOne;
    }
  };

  var addPieceToColumn = function(){
    var columnName = currentColumn(clickLocation);
    // set player colors

    var target = $(columnName + " div.empty").last();
    target.removeClass("empty");
    target.addClass(currentPlayer);
    target.css({"background-color": currentPlayer});
    // console.log(target);


    if(click_counter > 42) {
      alert("Game Over! You're equally talented!")
    };

  };

});

