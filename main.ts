input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Sad)
})
