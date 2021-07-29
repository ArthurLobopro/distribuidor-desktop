import { formataInput,formataDados } from "../format"
import { escrevacamadas, ede, ecdv } from "../write"
import Atomo from "../atomo.js"
import atomos_info from "../info.js"
import { get } from "../util"

const nomes = atomos_info.nomes

function bpn(state: AppState){
    const bpn_input = get("nome")
    let name = String(bpn_input.value)
    name = name.replaceAll(' ','')

    const index = nomes.findIndex( nome => name.toUpperCase() === nome.toUpperCase() )

    if(index === -1){
        return({
            ...state,
            alert: {
                title: "Erro!",
                text: `'${name}' não foi reconhecido como nome de um átomo, verifique se escreveu corretamente e tente novamente.`
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
    bpn_input.value=""

    return {
        ...state,
        result: [...state.result, {content, index: state.result.length}]
    }
}
export default bpn