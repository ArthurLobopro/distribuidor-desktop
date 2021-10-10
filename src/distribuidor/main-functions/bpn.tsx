import { formataInput, formataDados } from "../format"
import { escrevacamadas, ede, ecdv } from "../write"
import Atomo from "../Atomo"
import atomos_info from "../info"
import { get } from "../util"

const nomes = atomos_info.nomes

function bpn(setAlert: CallableFunction) {
    const bpn_input = get("nome")
    let name = String(bpn_input.value)
    name = name.replaceAll(' ', '')

    const index = nomes.findIndex(nome => name.toUpperCase() === nome.toUpperCase())

    if (index === -1) {
        return setAlert({
            title: "Erro!",
            text: `'${name}' não foi reconhecido como nome de um átomo, verifique se escreveu corretamente e tente novamente.`
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
                {
                    escrevacamadas(atomo.camadas)
                }
                {
                    ecdv(atomo.camadaValencia, atomo.distribuicao)
                }
            </div>
        )
    ]
    bpn_input.value = ""

    return content
}
export default bpn