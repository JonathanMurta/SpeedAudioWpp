const js    = (el) => document.querySelector(el)
const jsAll = (el) => document.querySelectorAll(el)

let elementLoad  = null,
    stateAudio   = false

const interval = setInterval(() =>
{
    elementLoad = js("._3NrAe")
    
    if(elementLoad)
    {
        clearInterval(interval);

        const iconSpeed = document.createElement("span")
        
        iconSpeed.innerHTML = "1x"
        iconSpeed.classList.add("speedAudio")
        elementLoad.prepend(iconSpeed)

        iconSpeed.addEventListener("click", () =>
        {
            stateAudio = !stateAudio
            stateAudio ? js("span.speedAudio").innerHTML = "2x" : js("span.speedAudio").innerHTML = "1x"
            ActionAudio()
        })
    }
}, 1000)

const intervalAmount = setInterval(() =>
{
    if(js(".z_tTQ audio"))
        ActionAudio()
}, 500)

ActionAudio = () =>
{
    const audios = jsAll("audio")

    audios.forEach(element =>{stateAudio ? element.playbackRate = 2 : element.playbackRate = 1})
}