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
    playerPosition: 'right',
    playerStats: {
        health: 100,
        attackPower: 2
    }
}

var player2 = {
    loadSprites: [],
    playerInfo: [],
    animations: [],
    playerPosition: 'right',
    playerStats: {
        health: 100,
        attackPower: 2
    }
}

//preload method, here i preload all the images used in the game in the browser's memory 
function preload ()
{
    //preload game decor
    this.load.image("background", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Background_01.png")
    this.load.image("chimney1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Chimney_02.png")
    this.load.image("chimney2", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Chimney_03.png")
    this.load.image("stoneWall1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Wall_C_02.png")
    this.load.image("wideDoor1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Wide_Door_04.png")
    this.load.image("pillar1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Pillar_02.png")
    this.load.image("pillar2", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Pillar_01.png")
    this.load.image("pillar3", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Pillar_05.png")
    this.load.image("pillar4", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Pillar_03.png")
    this.load.image("pillar5", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Pillar_04.png")
    this.load.image("canopy1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Canopy_01.png")
    this.load.image("roof1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Roof_A_04.png")
    this.load.image("roof2", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Roof_A_05.png")
    this.load.image("roofdecor1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Building/Decor_Window_03.png")
    this.load.image("well", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Well.png")
    this.load.image("barrel", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Wooden_Barrel.png")
    this.load.image("lantern", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Street_Lantern.png")
    this.load.image("cart", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Decor_Cart.png")
    this.load.image("chest", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Decor_Chest.png")
    this.load.image("shield", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Decor_Shield.png")
    this.load.image("sword", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Decor_Sword.png")
    this.load.image("grass1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Grass_01.png")
    this.load.image("grass2", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Environment/Grass_02.png")

    //preload game platforms
    this.load.image("ground", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Platformer/Ground_04.png")
    this.load.image("ground1", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Platformer/Ground_02.png")
    this.load.image("ground2", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Platformer/Ground_10.png")
    this.load.image("ground3", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Platformer/Ground_11.png")
    this.load.image("ground4", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Platformer/Ground_12.png")
    this.load.image("ground5", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/GAME%20TILESET/Platformer/Ground_08.png")

    //preload game character sprites
    //Player 1 sprites
    player1.loadSprites = this.load.spritesheet("knight1Idle", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/1_KNIGHT/knight1_idle.png", { 
        frameWidth: 728.5,
        frameHeight: 505
    })
    
    player1.loadSprites = this.load.spritesheet("knightWalk", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/1_KNIGHT/knight1_walk.png", { 
        frameWidth: 751.45,
        frameHeight: 505
    })
    player1.loadSprites = this.load.spritesheet("knightAttack", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/1_KNIGHT/knight1_attack.png", { 
        frameWidth: 790,
        frameHeight: 505
    })
    player1.loadSprites = this.load.spritesheet("knightDie", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/1_KNIGHT/knight1_die.png", { 
        frameWidth: 830,
        frameHeight: 505
    })
    player1.loadSprites = this.load.spritesheet("knightHurt", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/1_KNIGHT/knight1_hurt.png", { 
        frameWidth: 751.45,
        frameHeight: 505
    })

    //player 2 sprites
    player2.loadSprites = this.load.spritesheet("knight2Idle", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/2_KNIGHT/knight2_idle.png", { 
        frameWidth: 580,
        frameHeight: 520
    })
    player2.loadSprites = this.load.spritesheet("knight2Walk", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/2_KNIGHT/knight2_walk.png", { 
        frameWidth: 590,
        frameHeight: 525
    })
    player2.loadSprites = this.load.spritesheet("knight2Attack", "https://aaroncanales115.github.io/Milestone-Project-1-Browser-Game/assets/images/2_KNIGHT/knight2_attack.png", { 
        frameWidth: 607,
        frameHeight: 525
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

    //Player 1 declaration
    player1.playerInfo = this.physics.add.sprite(300,0, "knight1Idle");
    player1.playerInfo.name = 'Player 1'
    player1.playerInfo.setScale(0.37)
    player1.playerInfo.setCollideWorldBounds(true)

    //player 1 animations
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
    player1.animations = this.anims.create({
        key: 'attack',
        frames: this.anims.generateFrameNumbers('knightAttack', { start: 0, end: 1 }),
        frameRate: 5,
        repeat: 0,
    });
    player1.animations = this.anims.create({
        key: 'die',
        frames: this.anims.generateFrameNumbers('knightDie', { start: 0, end: 7 }),
        frameRate: 8,
        repeat: 0,
    });

    //player 2 declaration
    player2.playerInfo = this.physics.add.sprite(950,0, "knight2Idle");
    player2.playerInfo.name = 'Player 2'
    player2.playerInfo.setScale(0.37)
    player2.playerInfo.setCollideWorldBounds(true)

    //player 2 animations
    player2.animations = this.anims.create({
        key: 'idle2',
        frames: this.anims.generateFrameNumbers('knight2Idle', { start: 0, end: 9 }),
        frameRate: 10,
        repeat: -1
    });
    player2.animations = this.anims.create({
        key: 'walk2',
        frames: this.anims.generateFrameNumbers('knight2Walk', { start: 0, end: 9 }),
        frameRate: 10,
        repeat: -1
    });
    player2.animations = this.anims.create({
        key: 'attack2',
        frames: this.anims.generateFrameNumbers('knight2Attack', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player1.playerInfo,  platforms);
    this.physics.add.collider(player2.playerInfo,  platforms);
    
    //arrow keys
    cursors = this.input.keyboard.createCursorKeys();
    //WASD keysad
    keys = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });

    var box = this.add.rectangle(100,100,player1.playerStats.health,30, 0xff0000)
    this.add.text(60,90,'HP:' + player1.playerStats.health, {fontSize: 20})
    
    var box1 = this.add.rectangle(1170,100,player2.playerStats.health,30, 0xff0000)
    this.add.text(1130,90,'HP:' + player2.playerStats.health, {fontSize: 20})

    this.add.text(50,30, player1.playerInfo.name, {fontSize: 35, color: 'black'})
    this.add.text(1060,30, player2.playerInfo.name, {fontSize: 35, color: 'black'})
}

function update ()
{
    movePlayer1()
    movePlayer2()
    player2IsAlive()
    player1IsAlive()
    this.physics.add.collider(player1.playerInfo,  player2.playerInfo);
    
}

//Player 1 functions
//Player movement method
function movePlayer1(){
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
    else if (keys.up.isDown)
    {   
        player1.playerInfo.anims.play('attack', true);
        player1Attack()
    }
    else
    {
        player1.playerInfo.setVelocityX(0);
        
        player1.playerInfo.anims.play('idle', true);
    }
}

function player1Attack(){
    if ((player2.playerInfo.body.position.x - player1.playerInfo.body.position.x) < 277){
        console.log(player2.playerInfo.body.position.x - player1.playerInfo.body.position.x)
        player2.playerStats.health = (player2.playerStats.health - player1.playerStats.attackPower)
        console.log(player2.playerStats.health)
    }
}

function player1IsAlive(health){
    health = player1.playerStats.health
    if(player1.playerStats.health == 0){
        console.log('dead')
        alert('Player 2 won, player 1 is dead!')
    }
    
}

//player 2 functions
function movePlayer2(){
    
    if (cursors.left.isDown)
    {
        player2.playerInfo.setVelocityX(-70);
        player2.playerInfo.anims.play('walk2', true);
        
    }
    else if (cursors.right.isDown)
    {
        player2.playerInfo.setVelocityX(70);   
        player2.playerInfo.anims.play('walk2', true);
    }
    else if (cursors.up.isDown)
    {   
        player2.playerInfo.anims.play('attack2', true);
        player2Attack()
    }
    else {
        player2.playerInfo.setVelocityX(0);
        player2.playerInfo.anims.play('idle2', true);
    }
}

function player2IsAlive(health){
    health = player2.playerStats.health
    if(player2.playerStats.health == 0){
        console.log('dead')
        alert('Player 1 won, player 2 is dead!')
    }
}

function player2Attack(){
    if ((player2.playerInfo.body.position.x - player1.playerInfo.body.position.x) < 277){
        console.log(player1.playerInfo.body.position.x - player2.playerInfo.body.position.x)
        player1.playerStats.health = (player1.playerStats.health - player2.playerStats.attackPower)
        console.log(player1.playerStats.health)
    }
}


