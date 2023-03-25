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

var game = new Phaser.Game(config)


function preload ()
{
    this.load.image("background", "/assets/images/GAME TILESET/Background_01.png")
    this.load.image("ground", "/assets/images/GAME TILESET/Platformer/Ground_04.png")
    this.load.image("ground1", "/assets/images/GAME TILESET/Platformer/Ground_02.png")
    this.load.image("ground2", "/assets/images/GAME TILESET/Platformer/Ground_10.png")
    this.load.image("ground3", "/assets/images/GAME TILESET/Platformer/Ground_11.png")
    this.load.image("ground4", "/assets/images/GAME TILESET/Platformer/Ground_12.png")
    this.load.image("ground5", "/assets/images/GAME TILESET/Platformer/Ground_08.png")
}

var platforms
function create ()
{
    this.background = this.add.image(0,0,"background")
    this.background.setOrigin(0,0)

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
}

function update ()
{
}
