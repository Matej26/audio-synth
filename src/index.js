    const soundSelector = document.getElementById("soundSelect")
    const recordButton = document.getElementById("record")
    const playButton = document.getElementById("play")
    const buttonA = document.getElementById("A")
    const buttonS = document.getElementById("S")
    const buttonD = document.getElementById("D")
    const buttonF = document.getElementById("F")
    const buttonG = document.getElementById("G")
    const buttonH = document.getElementById("H")
    const buttonJ = document.getElementById("J")

    let value = soundSelector.value
    let SOUNDS = DRUMS
    let MELODY = {
      notes: [],
      totalTime: 0
    }
    const NOTE_TIME = 0.2
    let TIME = 0

    function onChange() {
      value = soundSelector.value
      if (value == "Drums")
        SOUNDS = DRUMS
      if (value == "Ding Dong's")
        SOUNDS = DINGS
      if (value == "Twinkles")
        SOUNDS = TWINKLES
    }

    player = new mm.Player()
    window.addEventListener("keydown", e => {
      onKeyDown(e)
    })

    window.addEventListener("keyup", e => {
      changeKeysStyle(e)
    })

    recordButton.addEventListener("click", () => {
      if (recordButton.value == "Record") {
        MELODY.notes = []
        MELODY.totalTime = 0
        recordButton.value = "Stop"
        playButton.style.backgroundColor = "#FF8C00"
      } else if (recordButton.value == "Stop") {
        recordButton.value = "Record"
        if (MELODY.notes.length != 0) {
          playButton.style.backgroundColor = "#FFFF00"
        }
      }
    })

    playButton.addEventListener("click", () => {
      if (recordButton.value == "Record" && MELODY.notes.length != 0 && playButton.value == "Play") {
        player.start(MELODY)
        playButton.value = "Stop"
      } 
      else if (playButton.value == "Stop") {
        player.stop()
        playButton.value = "Play"
      }
    })