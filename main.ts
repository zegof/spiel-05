namespace SpriteKind {
    export const Sprite = SpriteKind.create()
    export const Holzfällerhütten = SpriteKind.create()
    export const Kisten = SpriteKind.create()
    export const Schnee = SpriteKind.create()
    export const Wolken = SpriteKind.create()
    export const Farmen = SpriteKind.create()
    export const Feind = SpriteKind.create()
    export const Affe = SpriteKind.create()
    export const Haus = SpriteKind.create()
}
namespace StatusBarKind {
    export const Wood = StatusBarKind.create()
    export const Gold = StatusBarKind.create()
    export const Food = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Kisten)) {
        if (player1.overlapsWith(value)) {
            sprites.destroy(value)
            foodScore += 20
            goldScore += 20
            woodScore += 20
            game.showLongText("Du findest jeweils 20 Essen, Holz und Gold!", DialogLayout.Bottom)
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Farmen, function (sprite, otherSprite) {
    foodScore += -10
    if (true) {
        Affe2.setPosition(600, 120)
    } else {
        Affe2.follow(Farm, 15)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles0)) {
        n = 0
        for (let Wald of sprites.allOfKind(SpriteKind.Holzfällerhütten)) {
            if (player1.overlapsWith(Wald)) {
                n += 1
            }
        }
        if (n == 0) {
            if (sprites.allOfKind(SpriteKind.Holzfällerhütten).length < 3) {
                if (woodScore >= 60) {
                    woodScore += -60
                    Holzfällerhütte = sprites.create(img`
                        ....................e2e22e2e....................
                        .................222eee22e2e222.................
                        ..............222e22e2e22eee22e222..............
                        ...........e22e22eeee2e22e2eeee22e22e...........
                        ........eeee22e22e22e2e22e2e22e22e22eeee........
                        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
                        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
                        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
                        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
                        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
                        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
                        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
                        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
                        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
                        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
                        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
                        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
                        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
                        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
                        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
                        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
                        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
                        46622e22e22e22eeecc6666666666cceee22e22e22e22664
                        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
                        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
                        46622e22cc66666cc64444444444446cc66666cc22e22664
                        46622cc6666ccc64444444444444444446ccc6666cc22664
                        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
                        cccccccc6666666cb44444444444444bc6666666cccccccc
                        64444444444446c444444444444444444c64444444444446
                        66cb444444444cb411111111111111114bc444444444bc66
                        666cccccccccccd166666666666666661dccccccccccc666
                        6666444444444c116eeeeeeeeeeeeee611c4444444446666
                        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
                        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
                        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
                        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
                        666edccdccde4c66f4effffffffffeee66c4edccdccde666
                        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
                        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
                        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
                        cc66666666664c66e4e44e44e44feeee66c46666666666cc
                        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
                        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
                        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
                        ....644444444c66f4e44e44e44e44ee66c444444446....
                        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
                        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
                        `, SpriteKind.Holzfällerhütten)
                    scaling.scaleToPercent(Holzfällerhütte, 30, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    Holzfällerhütte.setPosition(player1.x, player1.y)
                } else {
                    game.showLongText("Holzfällerhütte erfordert 60 Holz.", DialogLayout.Bottom)
                }
            } else {
                game.showLongText("Es können nur 3 Holzfällerhütten gebaut werden.", DialogLayout.Bottom)
            }
        }
    }
    if (player1.tileKindAt(TileDirection.Center, sprites.castle.tileGrass3)) {
        n = 0
        for (let value3 of sprites.allOfKind(SpriteKind.Farmen)) {
            if (player1.overlapsWith(value3)) {
                n += 1
            }
        }
        if (n == 0) {
            if (sprites.allOfKind(SpriteKind.Farmen).length < 3) {
                if (woodScore >= 60) {
                    woodScore += -60
                    Farm = sprites.create(img`
                        . . . . . . . . . . . 6 6 6 6 6 
                        . . . . . . . . . 6 6 7 7 7 7 8 
                        . . . . . . 8 8 8 7 7 8 8 6 8 8 
                        . . e e e e c 6 6 8 8 . 8 7 8 . 
                        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
                        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
                        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
                        e 2 e e 2 2 2 2 e e e e c 6 8 . 
                        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
                        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
                        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
                        . . . e c c e c 2 2 2 2 2 2 2 e 
                        . . . . . . . c 2 e e 2 2 e 2 c 
                        . . . . . . . c e e e e e e 2 c 
                        . . . . . . . . c e 2 2 2 2 c . 
                        . . . . . . . . . c c c c c . . 
                        `, SpriteKind.Farmen)
                    scaling.scaleToPercent(Farm, 80, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    Farm.setPosition(player1.x, player1.y)
                    Affe2.follow(Farm, 70)
                } else {
                    game.showLongText("Farm erfordert 60 Holz.", DialogLayout.Bottom)
                }
            } else {
                game.showLongText("Es können nur 3 Farmen gebaut werden.", DialogLayout.Bottom)
            }
        }
    }
})
let Wolke: Sprite = null
let Schneeflocke: Sprite = null
let Winter = 0
let AnzahlJahreText = ""
let AnzahlTageText = ""
let woodScoreText = ""
let goldScoreText = ""
let foodScoreText = ""
let Holzfällerhütte: Sprite = null
let n = 0
let Farm: Sprite = null
let Affe2: Sprite = null
let Wald: Sprite = null
let Kiste: Sprite = null
let player1: Sprite = null
let woodScore = 0
tiles.setCurrentTilemap(tilemap`level01`)
let foodScore = 100
let goldScore = 10
woodScore = 100
let AnzahlTage = 61
let AnzahlJahre = 1
let statusbar_food = statusbars.create(30, 0, StatusBarKind.Energy)
let statusbar_gold = statusbars.create(30, 0, StatusBarKind.Energy)
let statusbar_wood = statusbars.create(30, 0, StatusBarKind.Energy)
let statusbar_Tage = statusbars.create(30, 0, StatusBarKind.Energy)
let statusBar_Jahre = statusbars.create(30, 0, StatusBarKind.Energy)
statusbar_food.positionDirection(CollisionDirection.Top)
statusbar_gold.positionDirection(CollisionDirection.Top)
statusbar_wood.positionDirection(CollisionDirection.Top)
statusbar_Tage.positionDirection(CollisionDirection.Bottom)
statusBar_Jahre.positionDirection(CollisionDirection.Bottom)
statusbar_food.setOffsetPadding(-62, 3)
statusbar_wood.setOffsetPadding(-62, 11)
statusbar_gold.setOffsetPadding(-62, 19)
statusbar_Tage.setOffsetPadding(-62, 15)
statusBar_Jahre.setOffsetPadding(-62, 7)
// Spieler- und Sprite-Definitionen
player1 = sprites.create(assets.image`Player`, SpriteKind.Player)
player1.setPosition(50, 50)
controller.moveSprite(player1, 100, 100)
scene.cameraFollowSprite(player1)
for (let index = 0; index < 1; index++) {
    Kiste = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Kisten)
    tiles.placeOnRandomTile(Kiste, sprites.castle.tilePath5)
}
for (let index = 0; index < 20; index++) {
    Wald = sprites.create(img`
        ...66666666666666666666.66777777777766..........................
        .6677777777776677777777667777777777776.........6666666666.......
        .67777777777776777777776777777777777776......66777777777766.....
        67777777777777767777777677777777777777666666667777777777776.....
        677777777777777677777776767777777777666777776777777777777776....
        676777777777767677777778677777777777767777776777777777777776....
        867777777777776877777778777777777777677777776767777777777676....
        877777777777777877777776767776777767677777778677777777777768....
        676777677776777667777676867767776776676777778777777777777778....
        686776777677668677767768667667766676867777776767776777767776....
        866766776667666877666768686667666668877777776867767776776686....
        868666766666866876666688866866686668676777678667667766676668....
        886686668666888866866686f6ee86688688686776778686667666668668....
        6f6ee866886888f8668868868feee6e88ff8866766766666666666668888....
        77feee6e88ff8f666666666866fff8eeffff8686666777777777766888f.....
        777fff8eeffff677777777786866666666666666867777777777776f8f......
        77777777777767777777777886667777777777666666667777777776f.......
        777777777777677777777777f6677777777777767777776677777776........
        77777777776767777777777776777777777777776777777677777676........
        77777777777686777777777766777777777777776777777767777768........
        77777777777787777777777776767777777777676777777767777778........
        77767777677767777777777778677777777777768777776767767776........
        77677767766866777677776778777777777777778777777686776686........
        766776667666867767776776667677767777677767777777866666666666....
        66676666686686766776667666867767776776686777677766777777777766..
        68666866688888666766666868667667766676668767766867777777777776..
        ee866886888f866866686668886866676666686686667666877777777777776.
        eee6e88ff8f6666686688688888668666866688886666866877777777777776.
        fff8eeffff7777776666666666f6ee866886888f68666888867777777777676.
        .f6e67777777777776777777776feee6e88ff8f66886888f677777777777768.
        ..f6777777777777776777777776fff8eeffffe6e88ff8f8777777777777778.
        ...677777777777777677777777766686777fff8eeffff86767776777767776.
        ...676777777777767677777777766687777777777777786867767776776686.
        ...867777777777776877777776768667677767777677768667667766676668.
        ...87777777777777787777777768e868677677767766868686667666668668.
        .6667677767777677767777777778ee86676677666766688866866686668888.
        67768677677767766866777767776ff8686667666668668.f6ee866886888f..
        77786676677666766687776776686..8866866686668888..feee6e88ff8f...
        77786866676666686687766676668...f6ee866886888f....fff8eeffff....
        77788668666866688887666668668....feee6e88ff8f....6666666666.....
        6777f6ee866886888f66686668888....6fff8eeffff76666777777777766...
        77777feee6e88ff8fe8666666666666666777777777777667777777777776...
        777777fff8eeffffee66777777777766677777777777776777777777777776..
        67776777767776..ff67777777777776677777777777776777777777777776..
        67767776776686...677777777777777676777777777766767777777777676..
        67666666666666...677777777777777667777777777778677777777777768..
        8666777777777766.676777777777767677777777777778777777777777778..
        6667777777777776.867777777777776876777677776776767776777767776..
        66777777777777776877777777777777886776777677666867767776776686..
        f6777777777777776676777677776777666766776667668667667766676668..
        .6767777777777676686776777677668668666766666868686667666668668..
        .8677777777777768866766776667666886686668666888866866686668888..
        .87777777777777788686667666668668f6ee866886888ff6ee866886888f...
        .676777677776777688668666866688886feee6e88ff8f..feee6e88ff8f....
        .6867767776776686.f6ee866886888f868fff8eeffff....fff8eeffff.....
        .8667667766676668..feee6e88ff8f88ff8f...........................
        .8686667666668668...fff8eeffffeeffff............................
        .8866866686668888...............................................
        ..f6ee866886888f................................................
        ...feee6e88ff8f.................................................
        ....fff8eeffff..................................................
        ................................................................
        ................................................................
        ................................................................
        `, SpriteKind.Kisten)
    tiles.placeOnRandomTile(Wald, sprites.swamp.swampTile2)
}
for (let index = 0; index < 3; index++) {
	
}
Affe2 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
Kiste = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Kisten)
tiles.placeOnRandomTile(Kiste, sprites.builtin.forestTiles10)
Affe2.setPosition(600, 120)
Affe2.setVelocity(5, 5)
let Haus = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11eeeeeeeeeeeeeeee11cdddddddddbbbb
    bbb8aaaaaaa8dc1be22222222222222eb1cd8aaaaaaa8bbb
    bbb888888888dc1be22222222222222eb1cd888888888bbb
    bbb833333338dcbbe22222222222222ebbcd833333338bbb
    bbb83ff3ff38dcbbe22222222222222ebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbe22222222222222ebbcd83cc3cc38bbb
    bbb833333338dcbbe22222222222222ebbcd833333338bbb
    cbb83ff3ff38dcbbe22222222222222ebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe22222222222222ebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe22222222222e22ebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe22222222222e22ebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbe22222222222222ebbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbe22222222222222ebbcdbbbdbbbdc...
    ....bddddddddcbbe22222222222222ebbcddddddddb....
    .....bdbbbdddcbbe22222222222222ebbcdddbbbdb.....
    ......bcccbbbcbbe22222222222222ebbcbbbcccb......
    `, SpriteKind.Haus)
Haus.setPosition(59, 50)
game.onUpdate(function () {
    if (goldScore >= 15) {
        game.setGameOverMessage(true, "SIEG mit 15 Gold!")
        game.gameOver(true)
    }
    if (Affe2.tileKindAt(TileDirection.Left, sprites.builtin.forestTiles0)) {
    	
    }
    if (foodScore <= 0) {
        game.setGameOverMessage(false, "GAME OVER durch Verhungern.")
        game.gameOver(false)
    }
    if (AnzahlJahre > 10) {
        game.setGameOverMessage(false, "GAME OVER durch Altersschwäche.")
        game.gameOver(false)
    }
    foodScore = Math.min(foodScore, 500)
    goldScore = Math.min(goldScore, 500)
    woodScore = Math.min(woodScore, 500)
    foodScore = Math.max(foodScore, 0)
    goldScore = Math.max(goldScore, 0)
    woodScore = Math.max(woodScore, 0)
    if (convertToText(foodScore).length == 2) {
        foodScoreText = "0" + foodScore
    } else {
        if (convertToText(foodScore).length == 1) {
            foodScoreText = "00" + foodScore
        } else {
            foodScoreText = convertToText(foodScore)
        }
    }
    if (convertToText(goldScore).length == 2) {
        goldScoreText = "0" + goldScore
    } else {
        if (convertToText(goldScore).length == 1) {
            goldScoreText = "00" + goldScore
        } else {
            goldScoreText = convertToText(goldScore)
        }
    }
    if (convertToText(woodScore).length == 2) {
        woodScoreText = "0" + woodScore
    } else {
        if (convertToText(woodScore).length == 1) {
            woodScoreText = "00" + woodScore
        } else {
            woodScoreText = convertToText(woodScore)
        }
    }
    if (convertToText(AnzahlTage).length == 2) {
        AnzahlTageText = "0" + AnzahlTage
    } else {
        if (convertToText(AnzahlTage).length == 1) {
            AnzahlTageText = "00" + AnzahlTage
        } else {
            AnzahlTageText = convertToText(AnzahlTage)
        }
    }
    if (convertToText(AnzahlJahre).length == 2) {
        AnzahlJahreText = "0" + AnzahlJahre
    } else {
        if (convertToText(AnzahlJahre).length == 1) {
            AnzahlJahreText = "00" + AnzahlJahre
        } else {
            AnzahlJahreText = convertToText(AnzahlJahre)
        }
    }
    statusbar_food.setLabel("Food:" + foodScoreText)
    statusbar_gold.setLabel("Gold:" + goldScoreText)
    statusbar_wood.setLabel("Wood:" + woodScoreText)
    statusbar_Tage.setLabel("Days:" + AnzahlTageText)
    statusBar_Jahre.setLabel("Year:" + AnzahlJahreText)
})
game.onUpdateInterval(1000, function () {
    AnzahlTage += 1
    if (AnzahlTage > 365) {
        AnzahlJahre += 1
        AnzahlTage = 1
    }
    if (AnzahlTage <= 60 || AnzahlTage > 300) {
        Winter = 1
        if (AnzahlTage % 10 == 0) {
            for (let index = 0; index < 2; index++) {
                Schneeflocke = sprites.create(img`
                    . . . . . . . . b . . . . . . . 
                    . . . . . . b d d c . . . . . . 
                    . . . . . b 1 1 d d c . . . . . 
                    . . . . b 1 1 1 d 1 1 b . . . . 
                    . . . . c 1 1 1 d 1 1 1 c c . . 
                    b b b c d 1 1 c c 1 1 d 1 1 b b 
                    b d 1 1 d d b c c c b d 1 1 1 b 
                    b 1 1 1 1 c c . . c d d 1 1 1 b 
                    b 1 1 1 1 c c . . b 1 1 d d c . 
                    . b 1 1 d d b c b b 1 1 b c c . 
                    . . c b d d b 1 1 b b d b c . . 
                    . . c 1 1 d d 1 1 1 d d d b . . 
                    . b d 1 1 1 d 1 1 d 1 1 1 d b . 
                    . b d 1 1 1 d b b d 1 1 1 1 b . 
                    . . b 1 1 d c c b b d 1 1 d b . 
                    . . b b b b . . . b b b b b b . 
                    `, SpriteKind.Schnee)
                tiles.placeOnRandomTile(Schneeflocke, sprites.castle.tilePath5)
                Wolke = sprites.create(img`
                    .........bbbb...........
                    .......bb1111bb.........
                    ......bb111111bbbbb.....
                    ......b1111111ddd11b....
                    ......b11111111d1111b...
                    ...bbbd11111111d1111b...
                    ..b11111111111111111bb..
                    .b11111111111111111d11b.
                    .b111d11111111111111111b
                    cdd1d111111111111111111c
                    cdddd11111111111111111dc
                    cddbd11111d11111dd111dc.
                    .cbbdd111dddd11ddbdddcc.
                    .ccbbdddddbdddddddbcc...
                    ...cccdddbbbdddddcc.....
                    ......ccccccccccc.......
                    `, SpriteKind.Wolken)
                tiles.placeOnRandomTile(Wolke, sprites.castle.tilePath5)
            }
            for (let index = 0; index < 1; index++) {
                Schneeflocke = sprites.create(img`
                    . . . . . . . . b . . . . . . . 
                    . . . . . . b d d c . . . . . . 
                    . . . . . b 1 1 d d c . . . . . 
                    . . . . b 1 1 1 d 1 1 b . . . . 
                    . . . . c 1 1 1 d 1 1 1 c c . . 
                    b b b c d 1 1 c c 1 1 d 1 1 b b 
                    b d 1 1 d d b c c c b d 1 1 1 b 
                    b 1 1 1 1 c c . . c d d 1 1 1 b 
                    b 1 1 1 1 c c . . b 1 1 d d c . 
                    . b 1 1 d d b c b b 1 1 b c c . 
                    . . c b d d b 1 1 b b d b c . . 
                    . . c 1 1 d d 1 1 1 d d d b . . 
                    . b d 1 1 1 d 1 1 d 1 1 1 d b . 
                    . b d 1 1 1 d b b d 1 1 1 1 b . 
                    . . b 1 1 d c c b b d 1 1 d b . 
                    . . b b b b . . . b b b b b b . 
                    `, SpriteKind.Schnee)
                tiles.placeOnRandomTile(Schneeflocke, sprites.castle.tileGrass3)
                Wolke = sprites.create(img`
                    .........bbbb...........
                    .......bb1111bb.........
                    ......bb111111bbbbb.....
                    ......b1111111ddd11b....
                    ......b11111111d1111b...
                    ...bbbd11111111d1111b...
                    ..b11111111111111111bb..
                    .b11111111111111111d11b.
                    .b111d11111111111111111b
                    cdd1d111111111111111111c
                    cdddd11111111111111111dc
                    cddbd11111d11111dd111dc.
                    .cbbdd111dddd11ddbdddcc.
                    .ccbbdddddbdddddddbcc...
                    ...cccdddbbbdddddcc.....
                    ......ccccccccccc.......
                    `, SpriteKind.Wolken)
                tiles.placeOnRandomTile(Wolke, sprites.castle.tileGrass3)
            }
            for (let index = 0; index < 1; index++) {
                Schneeflocke = sprites.create(img`
                    . . . . . . . . b . . . . . . . 
                    . . . . . . b d d c . . . . . . 
                    . . . . . b 1 1 d d c . . . . . 
                    . . . . b 1 1 1 d 1 1 b . . . . 
                    . . . . c 1 1 1 d 1 1 1 c c . . 
                    b b b c d 1 1 c c 1 1 d 1 1 b b 
                    b d 1 1 d d b c c c b d 1 1 1 b 
                    b 1 1 1 1 c c . . c d d 1 1 1 b 
                    b 1 1 1 1 c c . . b 1 1 d d c . 
                    . b 1 1 d d b c b b 1 1 b c c . 
                    . . c b d d b 1 1 b b d b c . . 
                    . . c 1 1 d d 1 1 1 d d d b . . 
                    . b d 1 1 1 d 1 1 d 1 1 1 d b . 
                    . b d 1 1 1 d b b d 1 1 1 1 b . 
                    . . b 1 1 d c c b b d 1 1 d b . 
                    . . b b b b . . . b b b b b b . 
                    `, SpriteKind.Schnee)
                tiles.placeOnRandomTile(Schneeflocke, sprites.builtin.forestTiles0)
                Wolke = sprites.create(img`
                    .........bbbb...........
                    .......bb1111bb.........
                    ......bb111111bbbbb.....
                    ......b1111111ddd11b....
                    ......b11111111d1111b...
                    ...bbbd11111111d1111b...
                    ..b11111111111111111bb..
                    .b11111111111111111d11b.
                    .b111d11111111111111111b
                    cdd1d111111111111111111c
                    cdddd11111111111111111dc
                    cddbd11111d11111dd111dc.
                    .cbbdd111dddd11ddbdddcc.
                    .ccbbdddddbdddddddbcc...
                    ...cccdddbbbdddddcc.....
                    ......ccccccccccc.......
                    `, SpriteKind.Wolken)
                tiles.placeOnRandomTile(Wolke, sprites.builtin.forestTiles0)
            }
        }
    } else {
        Winter = 0
        n = 0
        for (let value4 of sprites.allOfKind(SpriteKind.Wolken)) {
            n += 1
            if (n <= 2) {
                sprites.destroy(value4)
            }
        }
        n = 0
        for (let value5 of sprites.allOfKind(SpriteKind.Schnee)) {
            n += 1
            if (n <= 2) {
                sprites.destroy(value5)
            }
        }
    }
    woodScore += sprites.allOfKind(SpriteKind.Holzfällerhütten).length * (4 - Winter)
    foodScore += sprites.allOfKind(SpriteKind.Holzfällerhütten).length * (-1 - Winter)
    woodScore += sprites.allOfKind(SpriteKind.Holzfällerhütten).length * (-1 - Winter)
    goldScore += sprites.allOfKind(SpriteKind.Holzfällerhütten).length * -1
    foodScore += sprites.allOfKind(SpriteKind.Farmen).length * (5 - Winter)
    foodScore += sprites.allOfKind(SpriteKind.Farmen).length * (-1 - Winter)
    woodScore += sprites.allOfKind(SpriteKind.Farmen).length * (-1 - Winter)
    goldScore += sprites.allOfKind(SpriteKind.Farmen).length * -1
    foodScore += -2 - 2 * Winter
    woodScore += -1 - Winter
})
