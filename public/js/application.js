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
    currentTarget = $("#" + currentColumn(clickLocation) + " div.empty").last();
    addClickCounter();
    notifyPlayerTurn();
    addPieceToColumn();
    verticalCheck();
    horizontalCheck();
    diagonalCheck();
  });

  //check for diagonal winner

  var diagonalCheck = function() {
    var columnStart = Number(currentColumn(clickLocation))
    var rowStart = Number(targetRow(currentTarget))
    var diag1ColorsArray = []
    var diag2ColorsArray = []
    var diagGroup1 = []
    var diagGroup2 = []

// add spaces to array to check for diagonal wins
    if(columnStart === 1) {
      diagGroup1.push($("#" + columnStart + " ." + rowStart))
      diagGroup1.push($("#" + (columnStart + 1) + " ." + (rowStart - 1)))
      diagGroup1.push($("#" + (columnStart + 2) + " ." + (rowStart - 2)))
      diagGroup1.push($("#" + (columnStart + 3) + " ." + (rowStart - 3)))
      diagGroup2.push($("#" + columnStart + " ." + rowStart))
      diagGroup2.push($("#" + (columnStart + 1) + " ." + (rowStart + 1)))
      diagGroup2.push($("#" + (columnStart + 2) + " ." + (rowStart + 2)))
      diagGroup2.push($("#" + (columnStart + 3) + " ." + (rowStart + 3)))
    }else if(columnStart === 2) {
      diagGroup1.push($("#" + (columnStart - 1) + " ." + (rowStart + 1)))
      diagGroup1.push($("#" + columnStart + " ." + rowStart))
      diagGroup1.push($("#" + (columnStart + 1) + " ." + (rowStart - 1)))
      diagGroup1.push($("#" + (columnStart + 2) + " ." + (rowStart - 2)))
      diagGroup1.push($("#" + (columnStart + 3) + " ." + (rowStart - 3)))
      diagGroup2.push($("#" + (columnStart - 1) + " ." + (rowStart - 1)))
      diagGroup2.push($("#" + columnStart + " ." + rowStart))
      diagGroup2.push($("#" + (columnStart + 1) + " ." + (rowStart + 1)))
      diagGroup2.push($("#" + (columnStart + 2) + " ." + (rowStart + 2)))
      diagGroup2.push($("#" + (columnStart + 3) + " ." + (rowStart + 3)))
    }else if(columnStart === 3) {
      diagGroup1.push($("#" + (columnStart - 2) + " ." + (rowStart + 2)))
      diagGroup1.push($("#" + (columnStart - 1) + " ." + (rowStart + 1)))
      diagGroup1.push($("#" + columnStart + " ." + rowStart))
      diagGroup1.push($("#" + (columnStart + 1) + " ." + (rowStart - 1)))
      diagGroup1.push($("#" + (columnStart + 2) + " ." + (rowStart - 2)))
      diagGroup1.push($("#" + (columnStart + 3) + " ." + (rowStart - 3)))
      diagGroup2.push($("#" + (columnStart - 2) + " ." + (rowStart - 2)))
      diagGroup2.push($("#" + (columnStart - 1) + " ." + (rowStart - 1)))
      diagGroup2.push($("#" + columnStart + " ." + rowStart))
      diagGroup2.push($("#" + (columnStart + 1) + " ." + (rowStart + 1)))
      diagGroup2.push($("#" + (columnStart + 2) + " ." + (rowStart + 2)))
      diagGroup2.push($("#" + (columnStart + 3) + " ." + (rowStart + 3)))
    }else if(columnStart === 4) {
      diagGroup1.push($("#" + (columnStart - 3) + " ." + (rowStart + 3)))
      diagGroup1.push($("#" + (columnStart - 2) + " ." + (rowStart + 2)))
      diagGroup1.push($("#" + (columnStart - 1) + " ." + (rowStart + 1)))
      diagGroup1.push($("#" + columnStart + " ." + rowStart))
      diagGroup1.push($("#" + (columnStart + 1) + " ." + (rowStart - 1)))
      diagGroup1.push($("#" + (columnStart + 2) + " ." + (rowStart - 2)))
      diagGroup1.push($("#" + (columnStart + 3) + " ." + (rowStart - 3)))
      diagGroup2.push($("#" + (columnStart - 3) + " ." + (rowStart - 3)))
      diagGroup2.push($("#" + (columnStart - 2) + " ." + (rowStart - 2)))
      diagGroup2.push($("#" + (columnStart - 1) + " ." + (rowStart - 1)))
      diagGroup2.push($("#" + columnStart + " ." + rowStart))
      diagGroup2.push($("#" + (columnStart + 1) + " ." + (rowStart + 1)))
      diagGroup2.push($("#" + (columnStart + 2) + " ." + (rowStart + 2)))
      diagGroup2.push($("#" + (columnStart + 3) + " ." + (rowStart + 3)))
    }else if(columnStart === 5) {
      diagGroup1.push($("#" + (columnStart - 3) + " ." + (rowStart + 3)))
      diagGroup1.push($("#" + (columnStart - 2) + " ." + (rowStart + 2)))
      diagGroup1.push($("#" + (columnStart - 1) + " ." + (rowStart + 1)))
      diagGroup1.push($("#" + columnStart + " ." + rowStart))
      diagGroup1.push($("#" + (columnStart + 1) + " ." + (rowStart - 1)))
      diagGroup1.push($("#" + (columnStart + 2) + " ." + (rowStart - 2)))
      diagGroup2.push($("#" + (columnStart - 3) + " ." + (rowStart - 3)))
      diagGroup2.push($("#" + (columnStart - 2) + " ." + (rowStart - 2)))
      diagGroup2.push($("#" + (columnStart - 1) + " ." + (rowStart - 1)))
      diagGroup2.push($("#" + columnStart + " ." + rowStart))
      diagGroup2.push($("#" + (columnStart + 1) + " ." + (rowStart + 1)))
      diagGroup2.push($("#" + (columnStart + 2) + " ." + (rowStart + 2)))
    }else if(columnStart === 6) {
      diagGroup1.push($("#" + (columnStart - 3) + " ." + (rowStart + 3)))
      diagGroup1.push($("#" + (columnStart - 2) + " ." + (rowStart + 2)))
      diagGroup1.push($("#" + (columnStart - 1) + " ." + (rowStart + 1)))
      diagGroup1.push($("#" + columnStart + " ." + rowStart))
      diagGroup1.push($("#" + (columnStart + 1) + " ." + (rowStart - 1)))
      diagGroup2.push($("#" + (columnStart - 3) + " ." + (rowStart - 3)))
      diagGroup2.push($("#" + (columnStart - 2) + " ." + (rowStart - 2)))
      diagGroup2.push($("#" + (columnStart - 1) + " ." + (rowStart - 1)))
      diagGroup2.push($("#" + columnStart + " ." + rowStart))
      diagGroup2.push($("#" + (columnStart + 1) + " ." + (rowStart + 1)))
    }else if(columnStart === 7){
      diagGroup1.push($("#" + (columnStart - 3) + " ." + (rowStart + 3)))
      diagGroup1.push($("#" + (columnStart - 2) + " ." + (rowStart + 2)))
      diagGroup1.push($("#" + (columnStart - 1) + " ." + (rowStart + 1)))
      diagGroup1.push($("#" + columnStart + " ." + rowStart))
      diagGroup2.push($("#" + (columnStart - 3) + " ." + (rowStart - 3)))
      diagGroup2.push($("#" + (columnStart - 2) + " ." + (rowStart - 2)))
      diagGroup2.push($("#" + (columnStart - 1) + " ." + (rowStart - 1)))
      diagGroup2.push($("#" + columnStart + " ." + rowStart))
    };
    console.log(diagGroup1);
    console.log(diagGroup2);
    for(var i=0; i < diagGroup1.length; i++){
      currentClasswithinGroup = diagGroup1[i][0]
      if(currentClasswithinGroup){
        diag1ColorsArray.push(diagGroup1[i][0].classList[2])
      };
    };

    for(var i=0; i < diagGroup2.length; i++){
      currentClasswithinGroup = diagGroup2[i][0]
      if(currentClasswithinGroup){
        diag2ColorsArray.push(diagGroup2[i][0].classList[2])
      };
    };

    var diag1ColorsString = diag1ColorsArray.join('');
    var diag2ColorsString = diag2ColorsArray.join('');
      blkWin = (/blackblackblackblack/)
      redWin = (/redredredred/)

    if(blkWin.test(diag1ColorsString) === true || blkWin.test(diag2ColorsString) === true || redWin.test(diag1ColorsString) === true || redWin.test(diag2ColorsString) === true) {
      alert(currentPlayer + " is a winner! Moop Moop!")
    };


  };

  //check for horizontal winner

  var horizontalCheck = function() {
    var horizGroup = $("." + targetRow(currentTarget));
    // console.log(horizGroup);
    var horizColorsArray = []

    for(var i=0; i < horizGroup.length; i++) {
      horizColorsArray.push(horizGroup[i].classList[2]);
    };

    var horizColorsString = horizColorsArray.join('');
      blkWin = (/blackblackblackblack/)
      redWin = (/redredredred/)

    if(blkWin.test(horizColorsString) === true || redWin.test(horizColorsString) === true) {
        alert(currentPlayer + " is a winner! Moop Moop!")
    };

  };

  //check for vertical winner

  var verticalCheck = function(){
    // need to replace way of collecting group - only adds to group if clicked above the target, but not on the target

    vertGroup = $("#"+ currentColumn(clickLocation)).children();
    // console.log(vertGroup);
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

    var target = $("#" + columnName + " div.empty").last();
    target.removeClass("empty");
    target.addClass(currentPlayer);
    target.css({"background-color": currentPlayer});
    // console.log(target);


    if(click_counter > 42) {
      alert("Game Over! You're equally talented!")
    };

  };

});

