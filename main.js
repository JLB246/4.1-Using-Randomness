// Example
function flipCoin(){
  var value = Math.random();
  
  if (value < 0.5){
    return "heads";
  } else {
    return "tails";
  }
}


// YOUR rockPaperScissors() FUNCTION GOES HERE

function rockPaperScissors(){
  var choice = Math.random();
  
  if (choice < .34){
    return 'rock';
  }
  else if(choice <= .67){
    return "paper";
  }
  else{
    return "scissors";
  }
}

var result1 = rockPaperScissors();
console.log('The users choice was ' + result1)

// YOUR TEST INVOCATIONS GO HERE



/** Test code. Do not modify below this line **/
var result = flipCoin();
console.log('The coin landed on ' + result);
