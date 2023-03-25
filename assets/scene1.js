/*class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame")
    }
    preload(){
        this.load.image("background", "/assets/images/GAME TILESET/Background_01.png")
        this.load.image("ground", "/assets/images/GAME TILESET/Platformer/Ground_04.png")
    }
    
    create(){
        this.background = this.add.image(0,0,"background")
        this.background.setOrigin(0,0)

        var platforms
        platforms = this.physics.add.staticgroup()
       
        platforms.create(400,500, 'ground').setScale(2).refreshBody()

        /*this.ground = this.add.image(0,622,"ground")
        this.ground.setOrigin(0,0)
    }

    update(){
        game.physics.arcade.collide(platforms)
    }
    
}*/