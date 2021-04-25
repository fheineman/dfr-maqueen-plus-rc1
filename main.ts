function flashGrn () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.GREEN)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    basic.pause(150)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.GREEN)
    basic.pause(150)
}
function clrColors () {
    green = 0
    yellow = 0
    red = 0
    blue = 0
    white = 0
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Down") {
        if (angle > 0) {
            angle += -1
            DFRobotMaqueenPlus.servoRun(Servos.S1, angle)
        }
    } else if (receivedString == "Up") {
        if (angle < 180) {
            angle += 1
            DFRobotMaqueenPlus.servoRun(Servos.S1, angle)
        }
    } else if (receivedString == "LEDG") {
        clrColors()
        green = 1
    } else if (receivedString == "LEDY") {
        clrColors()
        yellow = 1
    } else if (receivedString == "LEDR") {
        clrColors()
        red = 1
    } else if (receivedString == "LEDB") {
        clrColors()
        blue = 1
    } else if (receivedString == "LEDW") {
        clrColors()
        white = 1
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
function flashYel () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.YELLOW)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    basic.pause(200)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.YELLOW)
    basic.pause(200)
}
radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, Math.map(value, 550, 1023, 10, 255))
    } else if (name == "B") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, Math.map(value, 1, 450, 255, 10))
    } else if (name == "L") {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, Math.map(value, 1, 450, 124, 40))
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, Math.map(value, 1, 450, 124, 40))
    } else if (name == "R") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, Math.map(value, 550, 1023, 40, 124) / 1)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, Math.map(value, 550, 1023, 40, 124))
    }
})
function flashBlue () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    basic.pause(150)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
    basic.pause(150)
}
function flashRed3 () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    basic.pause(150)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
    basic.pause(150)
}
let white = 0
let blue = 0
let red = 0
let yellow = 0
let green = 0
let angle = 0
radio.setGroup(1)
angle = 90
DFRobotMaqueenPlus.servoRun(Servos.S1, angle)
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (green == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
    } else if (yellow == 1) {
        flashYel()
    } else if (red == 1) {
        flashRed3()
    } else if (blue == 1) {
        flashBlue()
    } else if (white == 1) {
        flashGrn()
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
    }
})
basic.forever(function () {
    if (blue == 1) {
        music.playMelody("C5 G C5 G C5 G C5 G ", 240)
    }
})
