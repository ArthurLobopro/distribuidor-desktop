declare const res : HTMLElement

const escrevacamadas = camada => {
    return(
        <>
            Elétrons nas camadas:<br/>
            Camada K: {camada[0]}<br/>
            Camada L: {camada[1]}<br/>
            Camada M: {camada[2]}<br/>
            Camada N: {camada[3]}<br/>
            Camada O: {camada[4]}<br/>
            Camada P: {camada[5]}<br/>
            Camada Q: {camada[6]}<br/>
        </>
    )
}

function ede({s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7}){
    return (
        <div>
            1s{s1} <br/>
            2s{s2} 2p{p2}<br/>
            3s{s3} 3p{p3} 3d{d3}<br/>
            4s{s4} 4p{p4} 4d{d4} 4f{f4}<br/>
            5s{s5} 5p{p5} 5d{d5} 5f{f5}<br/>
            6s{s6} 6p{p6} 6d{d6}<br/>
            7s{s7} 2p{p7}
        </div>
    )
}

function ecdv(camadaValencia: number, dist){
    if(camadaValencia === 1){
        return (
            <>
                <br/>A camada de valência é: 1s{dist.s1}<br/>
                Elétrons na camada de valência: {dist.s1}
            </>
        )
    }

    const num = camadaValencia
    const sValue = dist[`s${num}`]
    const pValue = dist[`p${num}`]
    return (
        <>
            <br/>A camada de valência é: {num}s{sValue} {num}p{pValue} <br/>
            Elétrons na camada de valência: {sValue+pValue}
        </>
    )
}

export {escrevacamadas, ede, ecdv}