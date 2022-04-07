//const { Phaser } = require("../library/phaser");

console.log("hello from main.js");

let config = {
    type: Phaser.CANVAS,
    width: 640,    //originally 640 by 480
    height: 480,
    //scene: [Menu, Play],
    scene: Play
};

let borderUISize = config.height / 15;
let borderPadding = borderUISize/3;

let game = new Phaser.Game(config);
//game.scene.Play.update();
//Play.update();
//let menu = new Phaser.Scene.Menu();
//menu.create();