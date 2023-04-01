//set game configs
var config = {
    type: Phaser.AUTO,
    width: 1282,
    height: 750,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
    
}
//initiate game 
var game = new Phaser.Game(config)

//global vars
var platforms

var cursors
var wasdKeys

//player object
var player1 = {
    loadSprites: [],
    playerInfo: [],
    animations: [],
    playerPosition: 'right'
}

//preload method, here i preload all the images used in the game in the browser's memory 
function preload ()
{
    //preload game decor
    this.load.image("background", "/assets/images/GAME TILESET/Background_01.png")
    this.load.image("chimney1", "/assets/images/GAME TILESET/Building/Chimney_02.png")
    this.load.image("chimney2", "/assets/images/GAME TILESET/Building/Chimney_03.png")
    this.load.image("stoneWall1", "/assets/images/GAME TILESET/Building/Wall_C_02.png")
    this.load.image("wideDoor1", "/assets/images/GAME TILESET/Building/Wide_Door_04.png")
    this.load.image("pillar1", "/assets/images/GAME TILESET/Building/Pillar_02.png")
    this.load.image("pillar2", "/assets/images/GAME TILESET/Building/Pillar_01.png")
    this.load.image("pillar3", "/assets/images/GAME TILESET/Building/Pillar_05.png")
    this.load.image("pillar4", "/assets/images/GAME TILESET/Building/Pillar_03.png")
    this.load.image("pillar5", "/assets/images/GAME TILESET/Building/Pillar_04.png")
    this.load.image("canopy1", "/assets/images/GAME TILESET/Building/Canopy_01.png")
    this.load.image("roof1", "/assets/images/GAME TILESET/Building/Roof_A_04.png")
    this.load.image("roof2", "/assets/images/GAME TILESET/Building/Roof_A_05.png")
    this.load.image("roofdecor1", "/assets/images/GAME TILESET/Building/Decor_Window_03.png")
    this.load.image("well", "/assets/images/GAME TILESET/Environment/Well.png")
    this.load.image("barrel", "/assets/images/GAME TILESET/Environment/Wooden_Barrel.png")
    this.load.image("lantern", "/assets/images/GAME TILESET/Environment/Street_Lantern.png")
    this.load.image("cart", "/assets/images/GAME TILESET/Environment/Decor_Cart.png")
    this.load.image("chest", "/assets/images/GAME TILESET/Environment/Decor_Chest.png")
    this.load.image("shield", "/assets/images/GAME TILESET/Environment/Decor_Shield.png")
    this.load.image("sword", "/assets/images/GAME TILESET/Environment/Decor_Sword.png")
    this.load.image("grass1", "/assets/images/GAME TILESET/Environment/Grass_01.png")
    this.load.image("grass2", "/assets/images/GAME TILESET/Environment/Grass_02.png")

    //preload game platforms
    this.load.image("ground", "/assets/images/GAME TILESET/Platformer/Ground_04.png")
    this.load.image("ground1", "/assets/images/GAME TILESET/Platformer/Ground_02.png")
    this.load.image("ground2", "/assets/images/GAME TILESET/Platformer/Ground_10.png")
    this.load.image("ground3", "/assets/images/GAME TILESET/Platformer/Ground_11.png")
    this.load.image("ground4", "/assets/images/GAME TILESET/Platformer/Ground_12.png")
    this.load.image("ground5", "/assets/images/GAME TILESET/Platformer/Ground_08.png")

    //preload game character sprites
    player1.loadSprites = this.load.spritesheet("knight1Idle", "/assets/images/1_KNIGHT/knight1_idle.png", { 
        frameWidth: 728.5,
        frameHeight: 505
    })
    
    player1.loadSprites = this.load.spritesheet("knightWalk", "/assets/images/1_KNIGHT/knight1_walk.png", { 
        frameWidth: 751.45,
        frameHeight: 505
    })
}


//create method
function create ()
{
    //Game decor 
    this.background = this.add.image(0,0,"background").setOrigin(0,0)
    this.chimney1 = this.add.image(50, 557, "chimney1")
    this.chimney1 = this.add.image(50, 429, "chimney1")
    this.chimney2 = this.add.image(50, 301, "chimney2")
    this.stoneWall1 = this.add.image(205, 510, "stoneWall1")
    this.stoneWall1.setScale(0.7)
    this.stoneWall1 = this.add.image(400, 510, "stoneWall1")
    this.stoneWall1.setScale(0.7)
    this.wideDoor1 = this.add.image(300, 530, "wideDoor1")
    this.wideDoor1.setScale(0.7)
    this.pillar1 = this.add.image(105, 520, "pillar1")
    this.pillar1.setScale(0.7)
    this.pillar1 = this.add.image(500, 520, "pillar1")
    this.pillar1.setScale(0.7)
    this.pillar2 = this.add.image(230, 400, "pillar2")
    this.pillar2.setScale(0.7)
    this.pillar2 = this.add.image(375, 400, "pillar2")
    this.pillar2.setScale(0.7)
    this.pillar3 = this.add.image(105, 400, "pillar3")
    this.pillar3.setScale(0.7)
    this.pillar3 = this.add.image(500, 400, "pillar3")
    this.pillar3.setScale(0.7)
    this.pillar4 = this.add.image(140, 440, "pillar4")
    this.pillar4.setScale(0.6)
    this.pillar5 = this.add.image(460, 440, "pillar5")
    this.pillar5.setScale(0.6)
    this.canopy1 = this.add.image(300, 430, "canopy1")
    this.canopy1.setScale(0.7)
    this.roof1 = this.add.image(407, 340, "roof1")
    this.roof1.setScale(0.6)
    this.roof2 = this.add.image(196, 340, "roof2")
    this.roof2.setScale(0.6)
    this.roofdecor1 = this.add.image(300, 350, "roofdecor1")
    this.roofdecor1.setScale(0.7)
    this.well = this.add.image(1080, 455, "well")
    this.well.setScale(0.7)
    this.barrel = this.add.image(1200, 580, "barrel")
    this.barrel.setScale(0.7)
    this.lantern = this.add.image(820, 500, "lantern")
    this.lantern.setScale(0.6)
    this.cart = this.add.image(820, 550, "cart")
    this.cart.setScale(0.6)
    this.chest = this.add.image(590, 546, "chest")
    this.chest.setScale(0.6)
    this.shield = this.add.image(170, 520, "shield")
    this.shield.setScale(0.6)
    this.sword = this.add.image(435, 520, "sword")
    this.sword.setScale(0.6)
    this.grass1 = this.add.image(700, 605, "grass1")
    this.grass1.setScale(0.6)
    this.grass2 = this.add.image(970, 605, "grass2")
    this.grass2.setScale(0.6)


    //Game platforms with physics
    platforms = this.physics.add.staticGroup();
    platforms.create(65, 685, 'ground').setScale(1).refreshBody();   
    platforms.create(193, 685, 'ground1').setScale(1).refreshBody(); 
    platforms.create(321, 685, 'ground2').setScale(1).refreshBody(); 
    platforms.create(449, 685, 'ground3').setScale(1).refreshBody(); 
    platforms.create(577, 685, 'ground3').setScale(1).refreshBody(); 
    platforms.create(705, 685, 'ground3').setScale(1).refreshBody(); 
    platforms.create(833, 685, 'ground3').setScale(1).refreshBody(); 
    platforms.create(961, 685, 'ground4').setScale(1).refreshBody();
    platforms.create(1089, 685, 'ground1').setScale(1).refreshBody(); 
    platforms.create(1217, 685, 'ground5').setScale(1).refreshBody(); 

    //sprite declaration
    player1.playerInfo = this.physics.add.sprite(500,0, "knight1Idle");
    player1.playerInfo.setScale(0.37)
    player1.playerInfo.setCollideWorldBounds(true)

    player1.animations = this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('knight1Idle', { start: 0, end: 9 }),
        frameRate: 10,
        repeat: -1
    });
    player1.animations = this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('knightWalk', { start: 0, end: 9 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player1.playerInfo, platforms);
    //arrow keys
    cursors = this.input.keyboard.createCursorKeys();
    //WASD keysad
    keys = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });
}

function update ()
{
    movePlayer()
}

//Player movement method
function movePlayer(){
    
    /*if (cursors.left.isDown)
    {
        player1.setVelocityX(-70);
    }
    else if (cursors.right.isDown)
    {
        player1.setVelocityX(70);   
    }
    else
    {
        player1.setVelocityX(0);
    }*/
    if (keys.left.isDown)
    {
        player1.playerInfo.setVelocityX(-70);
        player1.playerInfo.anims.play('walk', true);
        
    }
    else if (keys.right.isDown)
    {
        player1.playerInfo.setVelocityX(70);   
        player1.playerInfo.anims.play('walk', true);
    }
    else
    {
        player1.playerInfo.setVelocityX(0);
        player1.playerInfo.anims.play('idle', true);
    }
}

