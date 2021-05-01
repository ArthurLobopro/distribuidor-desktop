//Funções usadas
const addCleanListener = () => {
    const removeAll = document.getElementById("remove-All")
    removeAll.onclick = event => {
        const divs = document.querySelectorAll(".res")
        for(let e of divs){
            res.removeChild(e)
        }
        res.style.display='none'
    }
}

//Funções para export
const addEvent = () => {
    let div = document.querySelectorAll('.res > .circle')
    for(let i of div){
        i.onclick = event =>{
            let target = event.target
            target = target.tagName == "IMG" ? target.parentElement : target
            let element = target.parentElement
            res.removeChild(element)
            let divs = document.querySelectorAll(".res")
            if(divs.length === 0){ 
                res.style.display='none'
            }
        }
    }
    addCleanListener()
}
const make_div = str => {
    return `
    <div class="res">
        ${circle}
        ${str}
    </div>`
}
const circle = `<div class="circle"><img src="././public/midia/close-icon.png"></div>`
//Variáveis para export
export { addEvent,make_div}