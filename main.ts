/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program lights up neo pixels based on light level
*/

let lightLevel = 0

// Set up Neopixels
let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()

input.onButtonPressed(Button.A, function () {
    lightLevel = input.lightLevel()

    strip.clear() // Turn off all Neopixels before setting new ones

    if (lightLevel > 208) {
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 156) {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    }
    if (lightLevel > 104) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    }
    if (lightLevel > 52) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    }

    strip.show()
})
