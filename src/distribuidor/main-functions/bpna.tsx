import {formataInput,formataAtomo, formataSimbolo} from "../format"
import {escrevacamadas, ede, ecdv } from "../write"
import Atomo from "../Atomo"
import { get } from "../util";

function bpna(state : AppState, num: (number | null) = null){
    const bpna_input = get('num')
    const bpna_carga = get('bpna-carga')
    num = num ?? Number(bpna_input.value)
    if(num == 0){
        return({
            ...state,
            alert: {
                title: "Erro!",
                text: "Você informou algum número inválido, confira as informações e tente novamente."
            }
        })
    }else{
        const carga = Number(bpna_carga?.value) || 0
        const atomo = new Atomo(num,carga)

        let content= [
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
                        formataAtomo(atomo.nome,atomo.carga)
                    }
                    {
                        formataSimbolo(atomo.simbolo,atomo.carga)
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
                    <div>
                    {
                        escrevacamadas(atomo.camadas)
                    }
                    {
                        ecdv(atomo.camadaValencia,atomo.distribuicao)
                    }
                </div>
                </div>
            )
        ]

        return {
            ...state,
            result: [...state.result, {content, index: state.result.length}]
        }
    }

}
export default bpna