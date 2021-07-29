import {formataInput,formataDados} from "../format"
import {escrevacamadas, ede, ecdv } from "../write"
import Atomo from "../atomo.js"
import atomos_info from "../info.js"
import {get} from "../util"

const simbolos = atomos_info.simbolos
function bps(state){
    const bps_input = get('simbolo')
    let simbol = bps_input.value
    simbol=simbol.replace(' ','')
    
    const index = simbolos.findIndex( simbolo => simbol.toLowerCase() === simbolo.toLowerCase())
    if(index === -1){
        return({
            ...state,
            alert: {
                title: "Erro!",
                text: `'${simbol}' não foi reconhecido como símbolo de um átomo, verifique se digitou corretamente e tente novamente.`
            }
        })
    }

    const atomo = new Atomo(index + 1,0)

    const content = [
        (
            <div>
                {
                    formataInput(
                        <>
                            Número Atômico: {atomo.num}<br/>Carga: {atomo.carga}<br/><br/>
                        </>
                    )
                }
                {
                    formataDados(atomo.nome,atomo.simbolo,atomo.num,atomo.familia,atomo.grupo,atomo.periodo)
                }
                Número atômico: {atomo.num}<br/><br/>
                Família: {atomo.familia}<br/>
                Grupo: {atomo.grupo}<br/>
                Período: {atomo.periodo}<br/>
            </div>
        ),
        (
            <div>
                Distribuição Eletrônica:<br/>
                {
                    ede(atomo.distribuicao)
                }
            </div>
        ),
        (
            <div>
                {
                    escrevacamadas(atomo.camadas)
                }
                {
                    ecdv(atomo.camadaValencia,atomo.distribuicao)
                }
            </div>
        )
    ]

    bps_input.value=""
    return {
        ...state,
        result: [...state.result, {content, index: state.result.length}]
    }
}
export default bps