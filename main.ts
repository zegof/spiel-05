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
        for (let value2 of sprites.allOfKind(SpriteKind.Holzfällerhütten)) {
            if (player1.overlapsWith(value2)) {
                n += 1
            }
        }
        if (n == 0) {
            if (sprites.allOfKind(SpriteKind.Holzfällerhütten).length < 3) {
                if (woodScore >= 60) {
                    woodScore += -60
                    Holzfällerhütte = sprites.create(assets.image`Holzfaelerhuete`, SpriteKind.Holzfällerhütten)
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
    Kiste = sprites.create(assets.image`Truhe`, SpriteKind.Kisten)
    tiles.placeOnRandomTile(Kiste, sprites.castle.tilePath5)
}
for (let index = 0; index < 20; index++) {
    Kiste = sprites.create(assets.image`Wald`, SpriteKind.Kisten)
    tiles.placeOnRandomTile(Kiste, sprites.castle.tilePath5)
}
for (let index = 0; index < 3; index++) {
	
}
Affe2 = sprites.create(assets.image`Affe`, SpriteKind.Enemy)
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
let Haus = sprites.create(assets.image`Haus`, SpriteKind.Haus)
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
