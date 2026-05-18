let background = Sound.load("r3/qqRnDGWqVSCDXj1e2XCnvzRQXZ9osimfvg3a8ZBVmcX")
let action = Sound.load("r3/kGJdeVJRY71MbG3lKFGqToYLLW3sqdYkLdJ1g7pqaZV")
let bell = Sound.load("r3/O0XPU3XLEkG5JKlNgfh3XcMFmmE3epzT7B2ZQKe3adI")
let thanks = Sound.load("r3/NNuYSmVxVyQkxLhMeQNUCS5frppKid253Lc1AOC5L9O")

background.play()

Scene["imutableSound"] = background
Scene["actionSound"] = action
Scene["bellSound"] = bell
Scene["thanksSound"] = thanks
