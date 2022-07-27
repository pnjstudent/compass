let heading = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    heading = input.compassHeading()
    if (0 < heading && heading <= 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (22.5 < heading && heading <= 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (67.5 < heading && heading <= 112.5) {
        basic.showArrow(ArrowNames.East)
    } else if (112.5 < heading && heading <= 157.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (157.5 < heading && heading <= 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (202.5 < heading && heading <= 247.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (247.5 < heading && heading <= 292.5) {
        basic.showArrow(ArrowNames.West)
    } else if (292.5 < heading && heading <= 337.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
