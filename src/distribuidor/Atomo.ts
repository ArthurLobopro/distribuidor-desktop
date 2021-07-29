import { achafamilia, achagrupo, achaperiodo, nomeatomo, simboloatomo } from "./get-info"
import distribuidor from "./distribuidor"
import { camadas as get_camada, get_camadaValencia } from "./camadas"

interface distribuicao{
    s1: number,
    s2: number, p2: number,
    s3: number, p3: number, d3: number,
    s4: number, p4: number, d4: number, f4: number,
    s5: number, p5: number, d5: number, f5: number,
    s6: number, p6: number, d6: number,
    s7: number, p7: number, 
}

interface Atomo {
    num :number,
    carga: number,
    eletrons: number,
    nome: string,
    simbolo: string,
    grupo: number,
    periodo: number,
    familia: string,
    distribuicao: distribuicao,
    camadas: number[],
    camadaValencia: number
}

class Atomo {
    constructor(num: number, carga = 0) {
        this.num = num
        this.carga = carga
        this.eletrons = num + (-carga)
        this.nome = nomeatomo(num)
        this.simbolo = simboloatomo(num)
        this.grupo = achagrupo(num)
        this.periodo = achaperiodo(num)
        this.familia = achafamilia(num, this.grupo)
        this.distribuicao = distribuidor(this.eletrons)
        this.camadas = get_camada(this.distribuicao)
        this.camadaValencia = get_camadaValencia(this.camadas)
    }
}
export default Atomo