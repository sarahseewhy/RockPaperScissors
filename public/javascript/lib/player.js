
function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype._RandomPick = function() {
  return this.PAIRS
}