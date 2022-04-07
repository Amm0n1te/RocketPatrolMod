class Play extends Phaser.Scene {
    constructor() {
        super("play");
        this.x = 600;
    }

    /*preload() {
        this.load.imag('imagename', 'image filepath');
    }*/
    create() {
        let menuText = this.add.text(300, 200, "now in play.js");
        menuText.setOrigin(0.5, 0.5);

        console.log("OSIJOSDIJFSD");
        //this.add.rectangle(0, 0, game.config.width, game.config.height, 0x10b33b);
        this.add.rectangle(this.x, 10, 50, 50, 0x10b33b).setOrigin(0, 0);
        //this.scene.start("play");
    }

    update() {
        this.x--;
        if (this.x <= 0) this.x = 600; 
    }


}