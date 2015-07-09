var currentColumn = function(clickLocation){
  return "#" + clickLocation.parent().attr('id');
}

var currentRow = function(clickLocation){
  return clickLocation.classList[2];
}
