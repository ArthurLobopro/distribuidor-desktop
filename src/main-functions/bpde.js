import {formataInput,formataAtomo,formataSimbolo} from "../formata.js"
import {escrevacamadas, ede, ecdv,escreve} from "../escreve.js"
import Atomo from "../atomo.js"
import {get} from "../util.js"
let s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7
const get_fim = ()=>{
    const array = [s1, s2, p2, s3, p3, s4, d3, p4, s5, d4, p5, s6, f4, d5, p6, s7, f5, d6, p7]
    const subcamadas = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"]
    let f = array.indexOf(0)
    return `${subcamadas[f-1]+array[f-1]}`
}
const clean_button =  get("clean-btn")
function bpde() {
    s1=Number(get("1s").value)
    s2=Number(get("2s").value), p2=Number(get("2p").value) 
    s3=Number(get("3s").value), p3=Number(get("3p").value), d3=Number(get("3d").value)
    s4=Number(get("4s").value), p4=Number(get("4p").value)
    d4=Number(get("4d").value), f4=Number(get("4f").value) 
    s5=Number(get("5s").value), p5=Number(get("5p").value)
    d5=Number(get("5d").value), f5=Number(get("5f").value)
    s6=Number(get("6s").value), p6=Number(get("6p").value), d6=Number(get("6d").value) 
    s7=Number(get("7s").value), p7=Number(get("7p").value)
    let carga=Number(get("dist-carga").value)
    let num=s1+s2+p2+s3+p3+d3+s4+p4+d4+f4+s5+p5+d5+f5+s6+p6+d6+s7+p7
	let content=""
    num+=carga
    if (num>0 && num<=118){
        const atomo = new Atomo(num,carga)
        content+=formataInput(`Destribuição: ...${get_fim()}<br>Carga: ${carga}<br><br>`)
        content+=formataAtomo(atomo.nome,atomo.carga)
        content+=formataSimbolo(atomo.simbolo,atomo.carga)  
        content+=`Número atômico: ${atomo.num}<br><br>Família: ${atomo.familia}<br>Grupo: ${atomo.grupo}<br>Período: ${atomo.periodo}<br>Distribuição Eletrônica:<br>`      
        content+=ede(atomo.distribuicao)
        content+=escrevacamadas(atomo.camadas)
        content+=ecdv(atomo.camadaValencia,atomo.distribuicao)
        escreve(content)
        clean_button.click()
    }else{
        alert("Você informou algum número inválido, confira as informações e tente novamente")
    }
}
export default bpde