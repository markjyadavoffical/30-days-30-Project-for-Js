const text = document.getElementById("text-input")
const button = document.getElementById("speak-button")



button.addEventListener("click", () => {
    const textValue = text.value 

    const utterance = new SpeechSynthesisUtterance(textValue);
    const voices = speechSynthesis.getVoices();
     utterance.voice = voices[0]
     speechSynthesis.speak(utterance)
})


