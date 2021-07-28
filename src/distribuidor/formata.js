const formataAtomo = (nome,carga) => {
    return (carga>0) ? `Elemento: ${nome} <sup>+${carga}</sup><br>` :
        (carga<0) ? `Elemento: ${nome} <sup>${carga}</sup><br>` : `Elemento: ${nome}<br>`
}
const formataSimbolo = (simbolo, carga) => {
    return (carga>0) ? `Símbolo: ${simbolo} <sup>+${carga}</sup><br><br>` :
        (carga<0) ? `Símbolo: ${simbolo} <sup>${carga}</sup><br><br>` : `Símbolo: ${simbolo}<br>` 
}
const formataInput = input => {
    return `<em>Dados Fornecidos:</em><br><br>${input}<em>Resultado:</em><br><br>`
}
const formataDados = (nome,simbolo,num,familia,grupo,periodo) => {
    return `Elemento: ${nome}<br>Símbolo: ${simbolo}<br>Número atômico: ${num}<br><br>Família: ${familia}<br>
    Grupo: ${grupo}<br>Período ${periodo}<br>|Distribuição Eletrônica:<br>`
}
export { formataAtomo, formataDados, formataInput, formataSimbolo }