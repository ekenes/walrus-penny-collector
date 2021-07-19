namespace SpriteKind {
    export const ball = SpriteKind.create()
    export const Crouch = SpriteKind.create()
    export const Surlaw_Crouch = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (walrus.vy == 0) {
        walrus.vy = height
    }
    if (walrus.vy == -10) {
        walrus.vy = height
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (direction == 2) {
        walrus.setImage(assets.image`myImage`)
        if (carry == 1) {
            walrus.setImage(assets.image`walrusFootball`)
        } else if (carry == 0) {
            walrus.setImage(assets.image`myImage`)
        }
    }
    if (direction == 1) {
        walrus.setImage(assets.image`walrus`)
        if (carry == 1) {
            walrus.setImage(assets.image`walrusFootballLeft`)
        } else if (carry == 0) {
            walrus.setImage(assets.image`walrus`)
        }
    }
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.ball, function (sprite, otherSprite) {
    sprite.vy = -10
    if (controller.player2.isPressed(ControllerButton.A)) {
        otherSprite.destroy()
        Player2Carry = 1
    }
})
scene.onHitWall(SpriteKind.Player2, function (sprite, location) {
    if (Surlaw_direction == 2) {
        Surlaw.setImage(assets.image`myImage1`)
        if (Player2Carry == 1) {
            Surlaw.setImage(assets.image`walrusFootball0`)
        } else if (Player2Carry == 0) {
            Surlaw.setImage(assets.image`myImage1`)
        }
    }
    if (Surlaw_direction == 1) {
        Surlaw.setImage(assets.image`myImage0`)
        if (Player2Carry == 1) {
            Surlaw.setImage(assets.image`walrusFootballLeft0`)
        } else if (Player2Carry == 0) {
            Surlaw.setImage(assets.image`myImage0`)
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (Surlaw_direction == 2) {
        Surlaw.setImage(assets.image`croutch0`)
    } else {
        Surlaw.setImage(assets.image`crouch-left0`)
    }
    Surlaw.setKind(SpriteKind.Surlaw_Crouch)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    walrus.setKind(SpriteKind.Player)
    pause(1000)
    height = -150
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    if (Player2Carry == 1) {
        football = sprites.create(assets.image`myFootball`, SpriteKind.ball)
        football.startEffect(effects.warmRadial)
        football.setPosition(Surlaw.x, Surlaw.y)
        if (Surlaw_direction == 2) {
            football.setVelocity(70, 5)
        } else {
            football.setVelocity(-70, 5)
        }
        Player2Carry = 0
        animation.runImageAnimation(
        football,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . e e e 1 e 1 e 1 e 1 e 1 e e . 
            e e e e 1 1 1 1 1 1 1 1 1 e e e 
            e e e e 1 e 1 e 1 e 1 e 1 e e e 
            . e e e e e e e e e e e e e e . 
            . . e e e e e e e e e e e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e 1 e 1 e 1 . . . . . 
            . . . e 1 1 1 1 1 1 1 1 1 . . . 
            . . e e 1 e 1 e 1 e 1 e 1 e . . 
            . e e e e e e e e e e e e e e . 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e e e e e e e e e e e . 
            . . e e e e e e e e e e e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . e e e e e e e e e e e e e e . 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e e e e e e e e e e e . 
            . . e e e e e e e e e e e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . e e e e e e e e e e e e e e . 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e e e e e e e e e e e . 
            . . e e 1 e 1 e 1 e 1 e 1 e . . 
            . . . e 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . e 1 e 1 e 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . e e e 1 e 1 e 1 e 1 e 1 e e . 
            e e e e 1 1 1 1 1 1 1 1 1 e e e 
            e e e e 1 e 1 e 1 e 1 e 1 e e e 
            . e e e e e e e e e e e e e e . 
            . . e e e e e e e e e e e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    if (carry == 1) {
        walrus.setImage(img`
            ...................eeeeeeeee............
            ..................eeeeeeeeeee...........
            ..................eeeeeeeeeeee..........
            .................ee8eee8eeeeee..........
            .................eeeeeeeeeeeee..........
            ................eeeeeeeeeeeeee..........
            ................eeeeeeeeeeeeedddddd.....
            ................ddeeeddeeeeddeeeeeedd...
            ...............ddddeddddeedeeeeeeeeeed..
            ...............ddddeddddedeeeeeeeeeeeed.
            ...............ddddedddedeee1e1e1e1e1eed
            ................1dee1deedeee111111111eed
            ................11..11.eedee1e1e1e1e1ed.
            ................11..11..eeddeeeeeeeeede.
            ................11ee11eeeeedddeeeeeddee.
            ................11ee11eeeeeeeddddddeeee.
            ................e1eee1eeeeeeeeee..eeeee.
            ...............ee1eee1eeeeeeeeee..eeee..
            ..............eee11ee11eeeeeeeee.eeeee..
            .............eeeee1eee1eeeeeeeeeeeeeee..
            .............eeeeeeeeeeeeeeeeeeeeeeee...
            .............eeeeeeeeeeeeeeeeeeeeeeee...
            ............eeeeeeeeeeeeeeeeeeeeeeee....
            ............eeeeeeeeeeeeeeeeeeeeee......
            ............eeeeeeeeeeeeeeeeeeeee.......
            ............eee..eeeeeeeeeeeeee.........
            ............ee...eeeeeeeeeeeeee.........
            .................eeeeeeeeeeeee..........
            .................eeeeeeeeeeeee..........
            .................eeeeeeeeeeeee..........
            ................eeeeeeeeeeeeee..........
            ................eeeeeeeeeeeeee..........
            ................eeeeeeeeeeeee...........
            ................eeeeeeeeeeeee...........
            ................eeeee.eeeeee............
            ................eeeee..eeeeee...........
            .............eeeeeeee...eeeee...........
            .............eeeeeeee...eeeeee..........
            ..............eeeeeee...eeeeeee.........
            ................eeeee...eeeeeee.........
            `)
    } else {
        walrus.setImage(img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..............eeeeee..............................
            .............eeeeeeeee............................
            ............eeeeeeeeeee...........................
            ............eeeeeeeeeee...........................
            ...........ee8eee8eeeeee..........................
            ...........eeeeeeeeeeeeeeeeee.....................
            ..........eeeeeeeeeeeeeeeeeeeee...................
            ..........eeeeeeeeeeeeeeeeeeeee...................
            ..........eeeeeeeeeeeeeeeeeeeeee..................
            ..........edeeedeeeeeeeeeeeeeeee..................
            ..........dddedddeeeeeeeeeeeeeeee.................
            ..........dddedddeeeeeeeeeeeeeeee.................
            ..........1dee1deeeeeeeeeeeeeeeeee................
            ..........11..11.eeeeeeeeeeeeeeeeee...............
            ..........11..11..eeeeeeeeeeeeeeeee...............
            ..........11..11..eeeeeeeeeeeeeeeeee..............
            ..........11..11..eeeeeeeeeeeeeeeeee..............
            ..........1...11..eeeeeeeeeeeeeeeeeeeeee..........
            .........11...1...eeeeeeeeeeeeeeeeeeeeee..........
            ........111...1....eeeeeeeeeeeeeeeeeeeeee.........
            ........1....11....eeeeeeeeeeeeeeeeeeeeee.........
            ............11....eeeeeeeeeeeeeeeeeeeeeee.........
            ..................eeeeeeeeeeeeeeeeeeeeeeee........
            ..................eeeee.eeeeeeeeeeeeeeeeee........
            .................eeeeee..eeeeeeeeeeeeeeeeeeee.....
            ...............eeeeeeee...eeeeeeeeeeeeeeeeeeee....
            .............eeeeeeeee.....eeeeeeeeeeeeeeeeeeee...
            .............eeeeeeee.......eeeeeeeeeeeeeeeeeee...
            .............eeeeee...........eeeeeeeeeeeeeeeee...
            .............eeeee...............eeeeeeeeeeeeee...
            ..............ee..................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `)
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    Surlaw.setKind(SpriteKind.Player2)
    pause(1000)
    height = -150
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Surlaw.vy == 0) {
        Surlaw.vy = height
    }
    if (Surlaw.vy == -10) {
        Surlaw.vy = height
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    if (carry == 1) {
        walrus.setImage(img`
            ............eeeeeeeee...................
            ...........eeeeeeeeeee..................
            ..........eeeeeeeeeeee..................
            ..........eeeeee8eee8ee.................
            ..........eeeeeeeeeeeee.................
            ..........eeeeeeeeeeeeee................
            .....ddddddeeeeeeeeeeeee................
            ...ddeeeeeeddeeeeddeeedd................
            ..deeeeeeeeeedeeddddedddd...............
            .deeeeeeeeeeeededdddedddd...............
            dee1e1e1e1e1eeededddedddd...............
            dee111111111eeedeed1eed1................
            .de1e1e1e1e1eedee.11..11................
            .edeeeeeeeeeddee..11..11................
            .eeddeeeeedddeeeee11ee11................
            .eeeeddddddeeeeeee11ee11................
            .eeeee..eeeeeeeeee1eee1e................
            ..eeee..eeeeeeeeee1eee1ee...............
            ..eeeee.eeeeeeeee11ee11eee..............
            ..eeeeeeeeeeeeeee1eee1eeeee.............
            ...eeeeeeeeeeeeeeeeeeeeeeee.............
            ...eeeeeeeeeeeeeeeeeeeeeeee.............
            ....eeeeeeeeeeeeeeeeeeeeeeee............
            ......eeeeeeeeeeeeeeeeeeeeee............
            .......eeeeeeeeeeeeeeeeeeeee............
            .........eeeeeeeeeeeeee..eee............
            .........eeeeeeeeeeeeee...ee............
            ..........eeeeeeeeeeeee.................
            ..........eeeeeeeeeeeee.................
            ..........eeeeeeeeeeeee.................
            ..........eeeeeeeeeeeeee................
            ..........eeeeeeeeeeeeee................
            ...........eeeeeeeeeeeee................
            ...........eeeeeeeeeeeee................
            ............eeeeee.eeeee................
            ...........eeeeee..eeeee................
            ...........eeeee...eeeeeeee.............
            ..........eeeeee...eeeeeeee.............
            .........eeeeeee...eeeeeee..............
            .........eeeeeee...eeeee................
            `)
    } else {
        walrus.setImage(img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..............................eeeeee..............
            ............................eeeeeeeee.............
            ...........................eeeeeeeeeee............
            ...........................eeeeeeeeeee............
            ..........................eeeeee8eee8ee...........
            .....................eeeeeeeeeeeeeeeeee...........
            ...................eeeeeeeeeeeeeeeeeeeee..........
            ...................eeeeeeeeeeeeeeeeeeeee..........
            ..................eeeeeeeeeeeeeeeeeeeeee..........
            ..................eeeeeeeeeeeeeeeedeeede..........
            .................eeeeeeeeeeeeeeeedddeddd..........
            .................eeeeeeeeeeeeeeeedddeddd..........
            ................eeeeeeeeeeeeeeeeeed1eed1..........
            ...............eeeeeeeeeeeeeeeeee.11..11..........
            ...............eeeeeeeeeeeeeeeee..11..11..........
            ..............eeeeeeeeeeeeeeeeee..11..11..........
            ..............eeeeeeeeeeeeeeeeee..11..11..........
            ..........eeeeeeeeeeeeeeeeeeeeee..11...1..........
            ..........eeeeeeeeeeeeeeeeeeeeee...1...11.........
            .........eeeeeeeeeeeeeeeeeeeeee....1...111........
            .........eeeeeeeeeeeeeeeeeeeeee....11....1........
            .........eeeeeeeeeeeeeeeeeeeeeee....11............
            ........eeeeeeeeeeeeeeeeeeeeeeee..................
            ........eeeeeeeeeeeeeeeeee.eeeee..................
            .....eeeeeeeeeeeeeeeeeeee..eeeeee.................
            ....eeeeeeeeeeeeeeeeeeee...eeeeeeee...............
            ...eeeeeeeeeeeeeeeeeeee.....eeeeeeeee.............
            ...eeeeeeeeeeeeeeeeeee.......eeeeeeee.............
            ...eeeeeeeeeeeeeeeee...........eeeeee.............
            ...eeeeeeeeeeeeee...............eeeee.............
            ..................................ee..............
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Surlaw_direction = 2
    if (carry == 1) {
        Surlaw.setImage(assets.image`myImage2`)
    } else {
        Surlaw.setImage(assets.image`Temporary asset1`)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (carry == 1) {
        football = sprites.create(assets.image`myFootball`, SpriteKind.ball)
        football.startEffect(effects.warmRadial)
        football.setPosition(walrus.x, walrus.y)
        if (direction == 2) {
            football.setVelocity(70, 5)
        } else {
            football.setVelocity(-70, 5)
        }
        carry = 0
        animation.runImageAnimation(
        football,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . e e e 1 e 1 e 1 e 1 e 1 e e . 
            e e e e 1 1 1 1 1 1 1 1 1 e e e 
            e e e e 1 e 1 e 1 e 1 e 1 e e e 
            . e e e e e e e e e e e e e e . 
            . . e e e e e e e e e e e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e 1 e 1 e 1 . . . . . 
            . . . e 1 1 1 1 1 1 1 1 1 . . . 
            . . e e 1 e 1 e 1 e 1 e 1 e . . 
            . e e e e e e e e e e e e e e . 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e e e e e e e e e e e . 
            . . e e e e e e e e e e e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . e e e e e e e e e e e e e e . 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e e e e e e e e e e e . 
            . . e e e e e e e e e e e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . e e e e e e e e e e e e e e . 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e e e e e e e e e e e . 
            . . e e 1 e 1 e 1 e 1 e 1 e . . 
            . . . e 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . e 1 e 1 e 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . e e e e e e e e e e . . . 
            . . e e e e e e e e e e e e . . 
            . e e e 1 e 1 e 1 e 1 e 1 e e . 
            e e e e 1 1 1 1 1 1 1 1 1 e e e 
            e e e e 1 e 1 e 1 e 1 e 1 e e e 
            . e e e e e e e e e e e e e e . 
            . . e e e e e e e e e e e e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
})
scene.onHitWall(SpriteKind.ball, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        sprite.setVelocity(0, 0)
        animation.stopAnimation(animation.AnimationTypes.All, sprite)
        effects.clearParticles(sprite)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    height = -220
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 2) {
        walrus.setImage(assets.image`croutch`)
    } else {
        walrus.setImage(assets.image`crouch-left`)
    }
    walrus.setKind(SpriteKind.Crouch)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Surlaw_direction = 1
    if (carry == 1) {
        Surlaw.setImage(assets.image`Temporary asset`)
    } else {
        Surlaw.setImage(assets.image`Temporary asset0`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    sprite.vy = -10
    if (controller.A.isPressed()) {
        otherSprite.destroy()
        carry = 1
    }
})
let football: Sprite = null
let pennny: Sprite = null
let Surlaw_direction = 0
let direction = 0
let Surlaw: Sprite = null
let walrus: Sprite = null
let height = 0
let Player2Carry = 0
let carry = 0
carry = 0
Player2Carry = 0
height = -150
scene.setBackgroundColor(9)
walrus = sprites.create(assets.image`myImage`, SpriteKind.Player)
Surlaw = sprites.create(assets.image`myImage0`, SpriteKind.Player2)
controller.moveSprite(walrus, 100, 0)
walrus.ay = 350
tiles.placeOnRandomTile(walrus, assets.tile`myTile1`)
Surlaw.ay = 350
tiles.placeOnRandomTile(Surlaw, assets.tile`myTile2`)
controller.player2.moveSprite(Surlaw, 100, 0)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(walrus)
direction = 2
Surlaw_direction = 1
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    pennny = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . 4 4 e e 4 4 4 4 4 4 4 . . 
        . . 4 4 e e e 4 4 4 4 4 e 4 4 . 
        . . 4 4 4 4 e 4 4 4 e e e e 4 . 
        . . 4 4 4 4 e 4 4 4 e 4 4 4 4 . 
        . . 4 4 4 4 e 4 4 4 e 4 4 4 4 . 
        . . 4 4 4 4 e 4 4 4 e e e e 4 . 
        . . 4 4 e e e e e 4 4 4 e 4 4 . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(pennny, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    football = sprites.create(assets.image`myFootball`, SpriteKind.ball)
    tiles.placeOnTile(football, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
