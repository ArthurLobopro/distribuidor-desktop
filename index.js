import {range} from "./src/util.js"
import bpna from "./src/main-functions/bpna.js"
import bpn from "./src/main-functions/bpn.js"
import bps from "./src/main-functions/bps.js"
import bpde from "./src/main-functions/bpde.js"

const res = document.getElementById("res")
const subcamadas = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"]
const get = id =>  document.getElementById(id)

// Troca de pesquisa
const input_type = get("input-type")
input_type.onchange = () =>{
    if(input_type.value == "all"){
        input_type.value="dist"
        showAllAtoms()
    }else{
        const divs = [get("dist"),get("numat"),get("name")]
        for(let i of divs){ i.style.display='none' }
        get(input_type.value).style.display=''
    }
}

//Detecção de enventos
const subcamadas_inputs = document.querySelectorAll('#sub-inputs input')
const dist_carga = get("dist-carga")
const clean_button = get("clean-btn")
const bpde_button = get("bpde-btn")
const sub_functions = event => {
    const id = String(event.target.id)
    const key = event.key
    if(key === 'Enter'){
        event.target.id !== "7p" ? 
            get(subcamadas[ subcamadas.indexOf(id) +1 ]).focus() : dist_carga.focus()
    }
    if(key === 'c' || key === 'C' ){
        for(let i of subcamadas){
            if(i !== id){ get(i).value = get(i).max }
            else{ break }
        }
    }
    if(key === 'm' || key ==='M'){ get(id).value = get(id).max }
}

dist_carga.onkeydown = event => { if(event.key === "Enter"){ bpde() } }
bpde_button.onclick = bpde
clean_button.onclick = () => { for(let i of subcamadas_inputs){ i.value = i.min } }
for(let i of subcamadas_inputs){ i.onkeydown = sub_functions }

//Busca por número atômico
const bpna_input = get('num')
const bpna_buttom = get('bpna')
const bpna_carga = get('bpna-carga')
bpna_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpna() }
}
bpna_carga.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpna() }
}
bpna_buttom.onclick = bpna

//Busca por símbolo
const bps_input = get('simbolo')
const bps_buttom = get('bps') 
bps_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bps() }
}
bps_buttom.onclick= bps

//Busca por nome
const bpn_input = get('nome')
const bpn_buttom = get('bpn')
bpn_input.onkeydown = (event) =>{
    if(event.key=='Enter'){ bpn() }
}
bpn_buttom.onclick= bpn 

// Mostrar todos
const showAllAtoms = () => {
    get("loading").style.display='block'
    res.classList.add('invisible')
    const removeAll = document.getElementById("remove-All")
    removeAll.click()
    setTimeout(() => {
        res.classList.add('invisible')
        for(let valor of range(1,119)){
            bpna_input.value=valor
            bpna_buttom.click()
        }
        res.classList.remove('invisible')
        get("loading").style.display='none'
    }, 1000);
}