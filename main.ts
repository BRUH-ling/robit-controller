input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.pause(1000)
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.pause(1000)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.pause(1000)
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.pause(1000)
    radio.sendNumber(0)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Sad)
})
