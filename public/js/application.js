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
  });

  $('.row').on("click", function(){
    group = $(this).nextAll()
    arr = []
    for(var i=0; i < group.length; i++) {
      arr.push(group[i].classList[2])
    };

    var vertWin = arr.join('');
      blkWin = (/blackblackblackblack/)
      redWin = (/redredredred/)

    if(blkWin.test(vertWin) === true || redWin.test(vertWin) === true) {
        alert("You're a winner! Moop Moop!")
    };
  });

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
    console.log(columnName);
    // set player colors

    var target = $(columnName + " div.empty").last();
    target.removeClass("empty");
    target.addClass(currentPlayer);
    target.css({"background-color": currentPlayer});
    console.log(target);


    if(click_counter > 42) {
      alert("Game Over! You're equally talented!")
    };

  };

});
