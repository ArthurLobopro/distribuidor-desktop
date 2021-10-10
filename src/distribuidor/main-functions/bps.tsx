import { formataInput, formataDados } from "../format"
import { escrevacamadas, ede, ecdv } from "../write"
import Atomo from "../Atomo"
import atomos_info from "../info"
import { get } from "../util"

const simbolos = atomos_info.simbolos
function bps(setAlert: CallableFunction) {
    const bps_input = get('simbolo')
    let simbol = bps_input.value
    simbol = simbol.replace(' ', '')

    const index = simbolos.findIndex(simbolo => simbol.toLowerCase() === simbolo.toLowerCase())
    if (index === -1) {

        return setAlert({
            title: "Erro!",
            text: `'${simbol}' não foi reconhecido como símbolo de um átomo, verifique se digitou corretamente e tente novamente.`
        })

    }

    const atomo = new Atomo(index + 1, 0)

    const content = [
        (
            <div>
                {
                    formataInput(
                        <>
                            Número Atômico: {atomo.num}<br />Carga: {atomo.carga}<br /><br />
                        </>
                    )
                }
                {
                    formataDados(atomo.nome, atomo.simbolo, atomo.num, atomo.familia, atomo.grupo, atomo.periodo)
                }
            </div>
        ),
        (
            <div>
                Distribuição Eletrônica:<br />
                {
                    ede(atomo.distribuicao)
                }
            </div>
        ),
        (
            <div>
                {escrevacamadas(atomo.camadas)}
                {ecdv(atomo.camadaValencia, atomo.distribuicao)}
            </div>
        )
    ]

    bps_input.value = ""

    return content
}
export default bps