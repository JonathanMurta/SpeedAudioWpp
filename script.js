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
    if(document.querySelector(".z_tTQ audio") && !document.querySelector(".z_tTQ audio").classList.contains("backRate"))
        ActionAudio()
}, 1000)

ActionAudio = () =>
{
    const audios = document.querySelectorAll("audio")

    audios.forEach(element =>
    {        
        if(stateAudio)
        {
            element.playbackRate = 2;
            element.classList.add("backRate")
        }
        else
        {
            element.playbackRate = 1;
            element.classList.remove("backRate")
        }   
    })
}
   