//const { Phaser } = require("../library/phaser");
//now in Implementing the scrolling starfield  about 50% down
//console.log("hello from main.js");

let config = {
    type: Phaser.AUTO,
    width: 640,    //originally 640 by 480
    height: 480,
    scene: [Menu, Play],
};

//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize/3;

