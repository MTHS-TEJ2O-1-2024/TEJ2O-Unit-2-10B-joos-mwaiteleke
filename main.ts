/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program lights up neo pixels based on light level
*/

let distance = 0
let neopixelStrip: neopixel.Strip = null

input.onButtonPressed(Button.A, function () {
    // Measure the lightlevel
       let lightlevel = input.lightLevel()

        // Turns on neopixels based on light level
        if (lightlevel > 208) {

            // Turn all NeoPixels on if light level is more than 208
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.show()
        }

        if (lightlevel > 156) {

            // Turn 3 NeoPixels on if light level is more than 156
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.show()
        }

        if (lightlevel > 104) {

            // Turn 2 NeoPixels on if light level is more than 104
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.show()
        }

        if (lightlevel > 52) {

           // Turn 1 NeoPixel on if light level is more than 52
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.show()
        }
        })
