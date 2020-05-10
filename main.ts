OLED.init(128, 64)
for (let index = 0; index < 4; index++) {
    OLED.newLine()
}
for (let index = 0; index < 32; index++) {
    OLED.writeStringNewLine("Hello")
    OLED.newLine()
}
basic.forever(function () {
	
})
