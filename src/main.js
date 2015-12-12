var Preload = function() {};
Preload.prototype = {
  init: function() {
    //
  },
  preload: function() {
    //
  },
  create: function() {
    this.game.stage.backgroundColor = '#FF0000';

    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.refresh();

    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    this.game.stage.smoothed = false;

    PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST; //for WebGL

    // add preload animation assets here

    this.game.input.gamepad.start();

    this.game.state.start('Load', false);
  }
};

var Load = function() {};
Load.prototype = {
  preload: function() {
    // Load game assets here
  },
  create: function() {
    this.game.state.start('Gameplay');
  }
};

var main = function() {
  console.log('hello, jam! ♡');

  var game = new Phaser.Game(320, 240);
  game.state.add('Preload', Preload, false);
  game.state.add('Load', Load, false);
  game.state.add('Gameplay', Gameplay, false);
  game.state.start('Preload');
};