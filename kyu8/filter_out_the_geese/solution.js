function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter((bird)=>geese.indexOf(bird)==-1)
};