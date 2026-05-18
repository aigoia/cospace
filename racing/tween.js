function moveX(item, targetX, duration) {

    let startPosition = item.transform.position
    let startX = startPosition.x

    let time = 0

    let loop = Time.scheduleRepeating(() => {

        time += 0.02

        let t = time / duration

        if (t > 1) { t = 1 }

        let newX = startX + (targetX - startX) * t

        item.transform.position = new Vector3(
            newX,
            startPosition.y,
            startPosition.z
        )

        if (t >= 1) { loop.dispose() }

    }, 0.02)
}

function moveY(item, targetY, duration) {

    let startPosition = item.transform.position
    let startY = startPosition.y

    let time = 0

    let loop = Time.scheduleRepeating(() => {

        time += 0.02

        let t = time / duration;

        if (t > 1) { t = 1 }

        let newY = startY + (targetY - startY) * t

        item.transform.position = new Vector3(
            startPosition.x,
            newY,
            startPosition.z
        )

        if (t >= 1) { loop.dispose() }

    }, 0.02)
}

function moveZ(item, targetZ, duration) {

    let startPosition = item.transform.position
    let startZ = startPosition.z

    let time = 0

    let loop = Time.scheduleRepeating(() => {

        time += 0.02

        let t = time / duration

        if (t > 1) { t = 1 }

        let newZ = startZ + (targetZ - startZ) * t

        item.transform.position = new Vector3(
            startPosition.x,
            startPosition.y,
            newZ
        )

        if (t >= 1) { loop.dispose() }

    }, 0.02)
}

Scene["moveX"] = moveX
Scene["moveY"] = moveY
Scene["moveZ"] = moveZ
