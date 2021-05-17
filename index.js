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
          buttonA.className = "keyActive"
          break
        case "s":
          player.start(SOUNDS[1])
          buttonS.className = "keyActive"
          break
        case "d":
          player.start(SOUNDS[2])
          buttonD.className = "keyActive"
          break
        case "f":
          player.start(SOUNDS[3])
          buttonF.className = "keyActive"
          break
        case "g":
          player.start(SOUNDS[4])
          buttonG.className = "keyActive"
          break
        case "h":
          player.start(SOUNDS[5])
          buttonH.className = "keyActive"
          break
        case "j":
          player.start(SOUNDS[6])
          buttonJ.className = "keyActive"
        default:
          break
      }
    })

    window.addEventListener("keyup", e => {
      switch (e.key) {
        case "a":
          buttonA.className = "key"
          break
        case "s":
          buttonS.className = "key"
          break
        case "d":
          buttonD.className = "key"
          break
        case "f":
          buttonF.className = "key"
          break
        case "g":
          buttonG.className = "key"
          break
        case "h":
          buttonH.className = "key"
          break
        case "j":
          buttonJ.className = "key"
        default:
          break
      }
    })