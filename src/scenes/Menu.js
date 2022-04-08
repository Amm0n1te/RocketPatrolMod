class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        let menuText = this.add.text(300, 200, "menu goes here");
        //menuText.setOrigin(0.5, 0.5);
        this.scene.start("playScene");
    }
}