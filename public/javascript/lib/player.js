
function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.CHOICES = [
	'rock', 'paper', 'scissors', 'lizard', 'spock'
]

Player.prototype.randomPick = function() {
  return this.CHOICES[Math.floor(Math.random()*(5))]
}

 