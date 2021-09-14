/*
var tier = '';
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  
    case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  
    case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  
    default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

//You’ll receive a custom card, a signed version of the Exploding Kittens deck, one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.
//You’ll receive a signed version of the Exploding Kittens deck, one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.
//You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.

*/

///examples
var prize = "";

switch (winner) {
  case 1:
    prize += "a trip for two to the Bahamas and ";
  case 2:
    prize += "a four piece furniture set.";
    break;
  case 3:
    prize += "a smartwatch and ";
  default:
    prize += "tickets to the circus.";
}

console.log("You've won " + prize);