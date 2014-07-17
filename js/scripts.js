// Project Scripts

var Player = {
  initialize: function(initializedSymbol) {
    this.symbol = initializedSymbol;
  },
  create: function() {
    return Object.create(Player);
  },
  symbol:""
};

var Space = {
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function(name) {
    this.spaceNum = name;
    return Object.create(Space);
  },
  markBy: function(player) {
    this.markedBy = player;
  },
  xCoordinate:"",
  yCoordinate:"",
  markedBy: "",
  spaceNum: ""

}

var Board = {
  initialize: function() {

    for (var i = 1; i < 10; i++) {
      this.spaces.push(Space.create(i));
    };
  },
  spaces: []
}

