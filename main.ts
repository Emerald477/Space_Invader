input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    let sprite: game.LedSprite = null
    shoot = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
    shoot.set(LedSpriteProperty.Brightness, 0)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let shoot: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let enemy = game.createSprite(0, 0)
basic.forever(function () {
	
})
