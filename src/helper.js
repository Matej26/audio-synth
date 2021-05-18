function onKeyDown(e) {
    switch (e.key) {
        case "a":
            tryToRecord(SOUNDS[0].notes[0].pitch)
            player.start(SOUNDS[0])
            buttonA.style.backgroundColor = "#FFFF00"
            break
        case "s":
            tryToRecord(SOUNDS[1].notes[0].pitch)
            player.start(SOUNDS[1])
            buttonS.style.backgroundColor = "#FFFF00"
            break
        case "d":
            tryToRecord(SOUNDS[2].notes[0].pitch)
            player.start(SOUNDS[2])
            buttonD.style.backgroundColor = "#FFFF00"
            break
        case "f":
            tryToRecord(SOUNDS[3].notes[0].pitch)
            player.start(SOUNDS[3])
            buttonF.style.backgroundColor = "#FFFF00"
            break
        case "g":
            tryToRecord(SOUNDS[4].notes[0].pitch)
            player.start(SOUNDS[4])
            buttonG.style.backgroundColor = "#FFFF00"
            break
        case "h":
            tryToRecord(SOUNDS[5].notes[0].pitch)
            player.start(SOUNDS[5])
            buttonH.style.backgroundColor = "#FFFF00"
            break
        case "j":
            tryToRecord(SOUNDS[6].notes[0].pitch)
            player.start(SOUNDS[6])
            buttonJ.style.backgroundColor = "#FFFF00"
        default:
            break
    }
}

function tryToRecord(pitch) {
    if (recordButton.value == "Stop") {
        MELODY.notes.push({ pitch: pitch, startTime: TIME, endTime: TIME + NOTE_TIME })
        TIME += NOTE_TIME
        MELODY.totalTime += TIME
    }
}

function changeKeysStyle(e) {
    switch (e.key) {
        case "a":
            buttonA.style.backgroundColor = "white"
            break
        case "s":
            buttonS.style.backgroundColor = "white"
            break
        case "d":
            buttonD.style.backgroundColor = "white"
            break
        case "f":
            buttonF.style.backgroundColor = "white"
            break
        case "g":
            buttonG.style.backgroundColor = "white"
            break
        case "h":
            buttonH.style.backgroundColor = "white"
            break
        case "j":
            buttonJ.style.backgroundColor = "white"
        default:
            break
    }
}