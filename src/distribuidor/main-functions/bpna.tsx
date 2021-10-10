import { formataInput, formataAtomo, formataSimbolo } from "../format"
import { escrevacamadas, ede, ecdv } from "../write"
import Atomo from "../Atomo"
import { get } from "../util";

export default function bpna(num: (number | null) = null, setAlert: CallableFunction) {
    const bpna_input = get('num')
    const bpna_carga = get('bpna-carga')
    num = num ?? Number(bpna_input.value)
    if (num <= 0) {
        return setAlert({
            title: "Erro!",
            text: "Você informou algum número inválido, confira as informações e tente novamente."
        })
    } else {
        const carga = Number(bpna_carga?.value) || 0
        const atomo = new Atomo(num, carga)

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
                    {formataAtomo(atomo.nome, atomo.carga)}
                    {formataSimbolo(atomo.simbolo, atomo.carga)}
                    Número atômico: {atomo.num}<br /><br />
                    Família: {atomo.familia}<br />
                    Grupo: {atomo.grupo}<br />
                    Período: {atomo.periodo}<br />
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
                    <div>
                        {escrevacamadas(atomo.camadas)}
                        {ecdv(atomo.camadaValencia, atomo.distribuicao)}
                    </div>
                </div>
            )
        ]

        return content
    }

}