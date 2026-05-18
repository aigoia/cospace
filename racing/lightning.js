let lightningList = Scene.getItem("Lightning").children
let end = Scene.getItem("Panel")

let count = lightningList.length
let playTime = 0
let sucess = false

Scene["actionSound"].play()

for (let lightning of lightningList) {

    lightning.onCollisionEnter(() => {

        Scene["bellSound"].play()

        lightning.active = false;
        
        count = count - 1
        Debug.log(count)
        end.children[0].text = "Remain : " + Math.floor(count)
        
        if (count <= 0) { 
            Scene["thanksSound"].play() 
            end.children[0].text = "Time : " + Math.floor(playTime)
        }

    });
}

let loop = Time.scheduleRepeating(() => {

    playTime += 0.02;

    if (sucess === true) {
        loop.dispose() 
    }

}, 0.02);
