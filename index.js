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
      switch (e.key) {
        case "a":
          player.start(SOUNDS[0])
          buttonA.click()
          break
        case "s":
          player.start(SOUNDS[1])
          break
        case "d":
          player.start(SOUNDS[2])
          break
        case "f":
          player.start(SOUNDS[3])
          break
        case "g":
          player.start(SOUNDS[4])
          break
        case "h":
          player.start(SOUNDS[5])
          break
        case "j":
          player.start(SOUNDS[6])
        default:
          break
      }
    })