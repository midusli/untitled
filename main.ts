input.onButtonPressed(Button.A, function () {
    DS1307.DateTime(
    2019,
    1,
    11,
    5,
    10,
    1,
    35
    )
})
DS1307.start()
basic.forever(function () {
    basic.showNumber(DS1307.getMinute())
})
