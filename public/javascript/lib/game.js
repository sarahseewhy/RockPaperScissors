function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
  rock:     { beats: ['scissors', 'lizard'], scissors: 'crushes', lizard: 'crushes' }, 
  paper:    { beats: ['rock', 'spock'], rock: 'covers', spock: 'disproves'},
  scissors: { beats: ['paper', 'lizard'], paper: 'cuts', lizard: 'decapitates'},
  lizard: 	{ beats: ['spock', 'paper'], spock: 'poisons', paper: 'eats'},
  spock: 	  { beats: ['scissors', 'rock'], scissors: 'smashes', rock: 'vaporises'},
}	

Game.prototype.winner = function() {
  if (this._isSamePick()) {
    return null;
  }
  
  if(this.contains(this.PAIRS[this.player1.pick]['beats'], this.player2)) {
    return this.player1
  }
  else {
    return this.player2
  }  
}

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
}

Game.prototype.winningMessage = function() {
  var message;

  if(this.winner()) {
    message = [this.winner().name,
    this._victoryVerbFor(this.winner().pick, this.loser().pick),
    this.loser().name].join(' ');
  } else {
      message = 'Draw';
  }

  return  message
}

Game.prototype._victoryVerbFor = function(pick, opponentPick) {
 return this.PAIRS[pick][opponentPick];
}

Game.prototype._isSamePick = function() {
  return this.player1.pick === this.player2.pick; 
}

Array.prototype.contains = function(obj) {
  return this.indexOf(obj) > -1
 
}