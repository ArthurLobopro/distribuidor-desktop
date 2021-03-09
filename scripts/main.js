//Funções para export
const addEvent = () => {
    let div = document.querySelectorAll('.res .circle')
    for(let i of div){
        i.onclick = event =>{
            let target = event.target
            target = target.tagName == "IMG" ? target.parentElement : target
            let element = target.parentElement
            res.removeChild(element)
            let a = res.innerHTML
            if(a.indexOf('</div>')==-1){ 
                res.style.display='none'
            }
        }
    }
}
const make_div = str => {
    return `
    <div class="res">
        ${circle}
        ${str}
    </div>`
}
const circle = `<div class="circle"><img src="./midia/close-icon.png"></div>`
//Variáveis para export
export { addEvent,make_div}