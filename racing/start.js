let start = Scene.getItem("Panel")

Time.schedule(() => { 
    Scene["moveZ"](start, 4, 0.2);
}, 1.6)
