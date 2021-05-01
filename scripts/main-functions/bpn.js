import {formataInput,formataDados} from "../formata.js"
import {escrevacamadas, ede, ecdv,escreve} from "../escreve.js"
import Atomo from "../atomo.js"
import atomos_info from "../info.js"
import {get} from "../util.js"
const bpn_input = get("nome")
const nomes = atomos_info.nomes
function bpn(){
    let name = bpn_input.value
    name=name.replaceAll(' ','')
    let num=0
    let erro=true
    let content=""
    for(let i in nomes){
        i = Number(i)
        if(name.toUpperCase() == nomes[i].toUpperCase()){
           num=i+1
           erro=false
        }
        if(i==117 && num==0){
            alert(`"${name}" não foi reconhecido como nome de um átomo :( , verifique se não esqueceu algum acento ou colocou um espaço desnecessário.`)
        }
    }
    if (!erro){
        const atomo = new Atomo(num,0)
        content+=formataInput(`Nome: ${name}<br><br>`)
        content+=formataDados(atomo.nome,atomo.simbolo,atomo.num,atomo.familia,atomo.grupo,atomo.periodo)
        content+=ede(atomo.distribuicao)
        content+=escrevacamadas(atomo.camadas)
        content+=ecdv(atomo.camadaValencia,atomo.distribuicao)
        escreve(content)
    }
    bpn_input.value=""
}
export default bpn