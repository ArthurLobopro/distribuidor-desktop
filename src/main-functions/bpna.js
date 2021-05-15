import {formataInput,formataAtomo, formataSimbolo} from "../formata.js"
import {escrevacamadas, ede, ecdv,escreve} from "../escreve.js"
import Atomo from "../atomo.js"
import { get } from "../util.js";
const bpna_input = get('num')
const bpna_carga = get('bpna-carga')
function bpna(){
    let num =Number(bpna_input.value)
    if(num == 0){
        alert('Não existe um átomo de número atômico 0, por favor informe um valor entre 1 e 118')
    }else{
        const carga=Number(bpna_carga.value)
        const atomo = new Atomo(num,carga)
        let content=""
        content+=formataInput(`Número Atômico: ${atomo.num}<br>Carga: ${atomo.carga}<br><br>`)
        content+=formataAtomo(atomo.nome,atomo.carga)
        content+=formataSimbolo(atomo.simbolo,atomo.carga)
        content+=`Número atômico: ${atomo.num}<br><br>Família: ${atomo.familia}<br>Grupo: ${atomo.grupo}<br>Período: ${atomo.periodo}<br><br>Distribuição Eletrônica:<br>` 
        content+=ede(atomo.distribuicao)
        content+=escrevacamadas(atomo.camadas)
        content+=ecdv(atomo.camadaValencia,atomo.distribuicao)
        escreve(content)
        bpna_input.value=""
        bpna_carga.value=""
    }

}
export default bpna