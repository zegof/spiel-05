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
    export const wald = SpriteKind.create()
    export const Militärlager = SpriteKind.create()
    export const Ackerland = SpriteKind.create()
    export const Soldaten = SpriteKind.create()
    export const Späherlager = SpriteKind.create()
    export const Späher = SpriteKind.create()
}
namespace StatusBarKind {
    export const Wood = StatusBarKind.create()
    export const Gold = StatusBarKind.create()
    export const Food = StatusBarKind.create()
    export const SoldatHealth = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (player1.tileKindAt(TileDirection.Center, sprites.castle.tilePath5)) {
        if (sprites.allOfKind(SpriteKind.Militärlager).length < 3) {
            if (woodScore >= 180) {
                woodScore += -180
                Militärlager2 = sprites.create(assets.image`Militärlager`, SpriteKind.Militärlager)
                scaling.scaleToPercent(Militärlager2, 80, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                Militärlager2.setPosition(player1.x, player1.y)
            } else {
                game.showLongText("Militärlager erfordert 180 Holz", DialogLayout.Bottom)
            }
        } else {
            game.showLongText("Es können nur 3 Militärlager gebaut werden.", DialogLayout.Bottom)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath4, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`tilemap3`)
})
sprites.onOverlap(SpriteKind.Soldaten, SpriteKind.Affe, function (sprite, otherSprite) {
    statusbar.setColor(7, 2)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -3
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -1
})
statusbars.onDisplayUpdated(StatusBarKind.Health, function (status, image2) {
    if (status.kind() == 0) {
        SchadenAffen += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Militärlager, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        if (sprites.allOfKind(SpriteKind.Soldaten).length < 3) {
            if (goldScore >= 3) {
                goldScore += -3
                Soldat = sprites.create(assets.image`SoldatBILD`, SpriteKind.Soldaten)
                Soldat.setPosition(player1.x, player1.y)
                Soldat.follow(Affe2, 75)
                Soldat.setFlag(SpriteFlag.GhostThroughWalls, true)
                statusbar = statusbars.create(20, 2, StatusBarKind.Health)
                statusbar.attachToSprite(Soldat, 0, -4)
            } else {
                game.showLongText("Soldat erfordert 3 Gold.", DialogLayout.Bottom)
            }
        } else {
            game.showLongText("Es können nur 3 Soldaten pro Militärlager angeheuert werden.", DialogLayout.Bottom)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Kisten, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(otherSprite)
        foodScore += 20
        goldScore += 20
        woodScore += 20
        game.showLongText("Du findest jeweils 20 Essen, Holz und Gold!", DialogLayout.Bottom)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.ashes, 1000)
    Soldat.follow(Militärlager2, 10)
    Soldat.follow(Militärlager2, 10)
    Soldat.follow(Militärlager2, 10)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
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
                    Farm = sprites.create(assets.image`Farm`, SpriteKind.Farmen)
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
    if (player1.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles23)) {
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
                    Holzfällerhütte = sprites.create(assets.image`Holzfällerhütte`, SpriteKind.Holzfällerhütten)
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
    if (player1.tileKindAt(TileDirection.Center, sprites.castle.tilePath5)) {
        if (sprites.allOfKind(SpriteKind.Militärlager).length < 3) {
            if (woodScore >= 30) {
                woodScore += -30
                goldScore += -1
                Späherlager_1 = sprites.create(assets.image`SpäherlagerBILD`, SpriteKind.Späherlager)
                Späherlager_1.setPosition(player1.x, player1.y)
                scaling.scaleToPercent(Späherlager_1, 80, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            } else {
                game.showLongText("Es kann nur 1 Späherlager gebaut werden", DialogLayout.Bottom)
            }
        } else {
            game.showLongText("Späherlager erfordert 30 Holz ", DialogLayout.Bottom)
        }
    }
})
sprites.onOverlap(SpriteKind.Affe, SpriteKind.Farmen, function (sprite, otherSprite) {
    foodScore += -10
    if (true) {
        Affe2.setPosition(600, 120)
    } else {
        Affe2.follow(Farm, 15)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Späherlager, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (sprites.allOfKind(SpriteKind.Späher).length <= 1) {
            if (goldScore >= 2) {
                goldScore += -2
                Späher1 = sprites.create(assets.image`SpäherBILD`, SpriteKind.Späher)
                Späher1.setPosition(player1.x, player1.y)
                Späher1.setFlag(SpriteFlag.GhostThroughWalls, true)
                Späher1.setVelocity(randint(-10, 20), randint(-10, 10))
            } else {
                game.showLongText("Späher kostet 2 Gold", DialogLayout.Bottom)
            }
        } else {
            game.showLongText("Es kann nur 1 Späher angeheuert werden", DialogLayout.Bottom)
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
let Späher1: Sprite = null
let Späherlager_1: Sprite = null
let Holzfällerhütte: Sprite = null
let Farm: Sprite = null
let n = 0
let Soldat: Sprite = null
let Militärlager2: Sprite = null
let statusbar: StatusBarSprite = null
let Affe2: Sprite = null
let Wald: Sprite = null
let Kiste: Sprite = null
let player1: Sprite = null
let woodScore = 0
let goldScore = 0
tiles.setCurrentTilemap(tilemap`level01`)
let SchadenAffen = -4
let SchadenSoldaten = -10
let foodScore = 100
goldScore = 100
woodScore = 34
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
    Kiste = sprites.create(assets.image`Truhe1`, SpriteKind.Kisten)
    tiles.placeOnRandomTile(Kiste, sprites.castle.tilePath5)
}
for (let index = 0; index < 8; index++) {
    Wald = sprites.create(assets.image`Wald_bild`, SpriteKind.wald)
    tiles.placeOnRandomTile(Wald, assets.tile`myTile6`)
}
Affe2 = sprites.create(assets.image`Affe`, SpriteKind.Affe)
Kiste = sprites.create(assets.image`Truhe2`, SpriteKind.Kisten)
tiles.placeOnRandomTile(Kiste, sprites.builtin.forestTiles10)
Affe2.setPosition(600, 120)
Affe2.setVelocity(5, 5)
Affe2.setFlag(SpriteFlag.GhostThroughWalls, true)
statusbar = statusbars.create(20, 2, StatusBarKind.Health)
statusbar.attachToSprite(Affe2, 0, -2)
let Haus2 = sprites.create(assets.image`Haus`, SpriteKind.Haus)
Haus2.setPosition(59, 50)
game.onUpdate(function () {
    if (goldScore >= 200) {
        game.setGameOverMessage(true, "SIEG mit 200 Gold!")
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
                Schneeflocke = sprites.create(assets.image`Schnee1`, SpriteKind.Schnee)
                tiles.placeOnRandomTile(Schneeflocke, sprites.castle.tilePath5)
                Wolke = sprites.create(assets.image`Schneewolke1`, SpriteKind.Wolken)
                tiles.placeOnRandomTile(Wolke, sprites.castle.tilePath5)
            }
            for (let index = 0; index < 1; index++) {
                Schneeflocke = sprites.create(assets.image`Schnee2`, SpriteKind.Schnee)
                tiles.placeOnRandomTile(Schneeflocke, sprites.castle.tileGrass3)
                Wolke = sprites.create(assets.image`Schneewolke3`, SpriteKind.Wolken)
                tiles.placeOnRandomTile(Wolke, sprites.castle.tileGrass3)
            }
            for (let index = 0; index < 1; index++) {
                Schneeflocke = sprites.create(assets.image`Schnee3`, SpriteKind.Schnee)
                tiles.placeOnRandomTile(Schneeflocke, sprites.builtin.forestTiles0)
                Wolke = sprites.create(assets.image`Schneewolke2`, SpriteKind.Wolken)
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
