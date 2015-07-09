var currentColumn = function(clickLocation){
  return "#" + clickLocation.parent().attr('id');
}

var targetRow = function(currentTarget){
  return "." + currentTarget[0].classList[1];
}
