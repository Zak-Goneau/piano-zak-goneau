input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(music.beat(BeatFraction.Whole))
})
let line2 = 0
let line1 = 0
let line0 = 0
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . # .
    . . . # .
    . . . # .
    . . . # .
    . . . # .
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
music.setVolume(100)
if (input.buttonIsPressed(Button.A)) {
    music.setVolume(music.volume() + 1)
}
if (input.buttonIsPressed(Button.AB)) {
    basic.showString("" + (music.volume()))
}
basic.forever(function () {
    line0 = pins.digitalReadPin(DigitalPin.P2)
    line1 = pins.digitalReadPin(DigitalPin.P8)
    line2 = pins.digitalReadPin(DigitalPin.P1)
    if (line0 || (line1 || line2)) {
        basic.pause(30)
        line0 = pins.digitalReadPin(DigitalPin.P2)
        line1 = pins.digitalReadPin(DigitalPin.P8)
        line2 = pins.digitalReadPin(DigitalPin.P1)
        if (!(line2) && (!(line1) && line0)) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        if (!(line2) && (line1 && !(line0))) {
            music.playTone(294, music.beat(BeatFraction.Half))
        }
        if (!(line2) && (line1 && line0)) {
            music.playTone(330, music.beat(BeatFraction.Half))
        }
        if (line2 && (!(line1) && !(line0))) {
            music.playTone(349, music.beat(BeatFraction.Half))
        }
        if (line2 && (!(line1) && line0)) {
            music.playTone(392, music.beat(BeatFraction.Half))
        }
        if (line2 && (line1 && !(line0))) {
            music.playTone(440, music.beat(BeatFraction.Half))
        }
        if (line2 && (line1 && line0)) {
            music.playTone(494, music.beat(BeatFraction.Half))
        }
    }
})
