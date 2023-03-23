class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame")
    }

    preload(){
        this.load.image("background", "/assets/images/GAME TILESET/Background_01.png")
    }

    create(){
        this.background = this.add.image(0,0,"background")
        this.background.setOrigin(0,0)
    }

}