function formatCarga(carga:number){
    if(carga > 0){
        return (
            <>
                <sup>+{carga}</sup>
            </>
        )
    }

    if(carga < 0){
        return (
            <>
                <sup>{carga}</sup>
            </>
        )
    }
}

const formataAtomo = (nome : string, carga: number) => {
    return( 
        <>
            <span>{`Elemento: ${nome}`}</span>
            {
               formatCarga(carga)
            }
            <br/>
        </>
    )
}
const formataSimbolo = (simbolo, carga) => {
    return (
        <>
            Símbolo: {simbolo}
            {
                formatCarga(carga)
            }
            <br/>
        </>
    )
}

const formataInput = input => {
    return `<em>Dados Fornecidos:</em><br/><br/>${input}<em>Resultado:</em><br/><br/>`
}

const formataDados = (nome,simbolo,num,familia,grupo,periodo) => {
    return `Elemento: ${nome}<br/>Símbolo: ${simbolo}<br/>Número atômico: ${num}<br/><br/>Família: ${familia}<br/>
    Grupo: ${grupo}<br/>Período ${periodo}<br/>|Distribuição Eletrônica:<br/>`
}
export { formataAtomo, formataDados, formataInput, formataSimbolo }