var room = "gallery";
var weapon = "trophy";
var suspect = "Ms. Van Cleve";
var solved = false

// Mr. Kalehoff was present in the ballroom at the time of the murder
if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
  weapon = 'poison';
  solved = true; 
}
// Mrs. Sparr was present in the billiards room at the time of the murder
else if (room === 'billiards room' && suspect==="Mrs. Sparr") {
  weapon = 'pool stick';
  solved = true; 
}
// Ms. Van Cleve was present in the gallery room at the time of the murder
else if (room === 'gallery' && suspect==="Ms. Van Cleve") {
  weapon = 'trophy';
  solved = true; 
}
// Mr. Parkes was present in the dining room room at the time of the murder
else if (room === 'dining room' && suspect==="Mr. Parkes") {
  weapon = 'knife';
  solved = true; 
}
if (solved) {
  console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}
