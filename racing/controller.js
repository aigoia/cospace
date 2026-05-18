let player = Scene.getItem("Player")
let camera = Scene.getItem("Camera")

let forwardAcceleration = 0.015
let reverseAcceleration = 0.008

let drag = 0.96

let turnStrength = 220
let turnSpeedMultiplier = 0.02

let lowSpeedTurnMax = 1.5
let lowSpeedTurnMin = 0.7

let maxSpeed = 0.25
let reverseSpeedLimit = 0.5

let minimumTurnSpeed = 0.01

let speed = 0
let angle = 0

let moveInput = 0
let turnInput = 0

let cameraDistance = 3
let cameraHeight = 1.5
let cameraSmooth = 0.08

Input.onKeyPressed(() => { turnInput = -1 }, "left")
Input.onKeyPressed(() => { turnInput = 1 }, "right")

Input.onKeyPressed(() => { moveInput = 1 }, "w")
Input.onKeyPressed(() => { moveInput = -1 }, "s")

player.transform.rotation = Quat.fromEulerAngles(0, 0, 0)

Time.scheduleRepeating(() => {

    let playerPosition = player.transform.position

    if (moveInput > 0) { speed = speed + forwardAcceleration }
    if (moveInput < 0) { speed = speed - reverseAcceleration }

    speed = speed * drag

    if (speed > maxSpeed) { speed = maxSpeed }
    if (speed < -maxSpeed * reverseSpeedLimit) { speed = -maxSpeed * reverseSpeedLimit }

    if (Math.abs(speed) > minimumTurnSpeed) {

        let speedRatio = Math.abs(speed) / maxSpeed
        let lowSpeedTurnBoost = lowSpeedTurnMax - speedRatio

        if (lowSpeedTurnBoost < lowSpeedTurnMin) { lowSpeedTurnBoost = lowSpeedTurnMin }

        angle = angle + turnInput * turnStrength * turnSpeedMultiplier * lowSpeedTurnBoost
    }

    let radian = angle * Math.PI / 180

    let sinAngle = Math.sin(radian)
    let cosAngle = Math.cos(radian)

    player.transform.position = new Vector3(
        playerPosition.x + sinAngle * speed,
        playerPosition.y + cosAngle * speed,
        playerPosition.z
    )

    let newPlayerPosition = player.transform.position
    let currentCameraPosition = camera.transform.position

    camera.transform.position = new Vector3(
        currentCameraPosition.x + (
            newPlayerPosition.x - sinAngle * cameraDistance - currentCameraPosition.x
        ) * cameraSmooth,

        currentCameraPosition.y + (
            newPlayerPosition.y - cosAngle * cameraDistance - currentCameraPosition.y
        ) * cameraSmooth,

        currentCameraPosition.z + (
            newPlayerPosition.z + cameraHeight - currentCameraPosition.z
        ) * cameraSmooth
    )

    camera.transform.lookAt(newPlayerPosition)

    moveInput = 0
    turnInput = 0

}, 0.02)
