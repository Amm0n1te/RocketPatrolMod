/*
Casey Chen
Drone Patrol: Attack on Oritheia
April 16 2022
time spent: ~20 hours

POINTS BREAKDOWN
========================================
parallax background             10 / 10
new artwork for all assets      20 / 30
'FIRE' UI                       5  / 35
new background music            5  / 40
timer                           10 / 50
animated spaceship              10 / 60
4 explosion SFX                 10 / 70
new UI borders                  5  / 75
fast ship                       20 / 95
robot voice                     5  / 100
========================================

Note
====
The robot voice for 5 points is a "#FACADE" tier proposed mod.  It's the one that says "rearming" and "ready".  Also, I wasn't sure if 
having new artwork for all assets and UI borders counts as double dipping.  Here's my argument:  In the original Nathan Altice build, 
the UI borders were actually just rectangles made by Phaser's this.add.rectangle function at runtime and would probably not count as an 
asset.  My new UI is a png in the assets folder, so it does.  Therefore, I can have the new artwork mod at the same time as the new UI 
borders mod.  
*/

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

