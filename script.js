const js = (el) => document.querySelector(el)
const jsAll = (el) => document.querySelectorAll(el)
let stateAudio = true

const interval = setInterval(() =>
{
    const elementLoad = js("._3NrAe")
    
    if(elementLoad)
    {
        clearInterval(interval);

        const iconSpeed = document.createElement("span")
        iconSpeed.innerHTML = "2x"
        iconSpeed.classList.add("speedAudio")
        elementLoad.prepend(iconSpeed)

        iconSpeed.addEventListener("click", () =>
        {
            const audios = document.querySelectorAll("audio")

            audios.forEach((element) =>
            {
                if (stateAudio)
                {
                    stateAudio = false
                    element.playbackRate = 1.5;
                    iconSpeed.innerHTML = "1x"
                }
                else
                {
                    stateAudio = true
                    element.playbackRate = 1;
                    iconSpeed.innerHTML = "2x"
                }
            })
        })
    }
}, 1000)
   