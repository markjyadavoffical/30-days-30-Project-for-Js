const inp = document.getElementById("input")
const button  = document.getElementById("btn")


button.addEventListener("click", () => {

    const inputValue = inp.value
    const uttrance = new SpeechSynthesisUtterance(inputValue)

   
    const voices = speechSynthesis.getVoices()

    uttrance.voice = voices[1]

    speechSynthesis.speak(uttrance)
})


