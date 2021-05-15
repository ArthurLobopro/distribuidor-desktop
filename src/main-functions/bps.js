import {formataInput,formataDados} from "../formata.js"
import {escrevacamadas, ede, ecdv,escreve} from "../escreve.js"
import Atomo from "../atomo.js"
import atomos_info from "../info.js"
import {get} from "../util.js"
const bps_input = get('simbolo')
const simbolos = atomos_info.simbolos
function bps(){
    let simbol = bps_input.value
    let num=0
    simbol=simbol.replace(' ','')
    let erro=true
    let content=""
    for(let i in simbolos){
        i = Number(i)
        if(simbol.toUpperCase() == simbolos[i].toUpperCase()){
           num=i+1
           erro=false
        }
        if(i==117 && num==0){
            alert(`"${simbol}" não foi reconhecido como símbolo de um átomo :( , verifique se digitou corretamente e tente novamente.`)
        }
    }
    if (!erro){
            let atomo = new Atomo(num)
            content+=`${formataInput(`Símbolo: ${simbol}<br><br>`)}`
            content+=formataDados(atomo.nome,atomo.simbolo,atomo.num,atomo.familia,atomo.grupo,atomo.periodo) + "|"
            content+=ede(atomo.distribuicao)
            content+=escrevacamadas(atomo.camadas)
            content+=ecdv(atomo.camadaValencia,atomo.distribuicao)
            escreve(content)
        }
        bps_input.value=""
}
export default bps