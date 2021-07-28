function camadas({s1,s2,p2,s3,p3,d3,s4,p4,d4,f4,s5,p5,d5,f5,s6,p6,d6,s7,p7}){
    let camada = [
        s1,
        s2+p2,
        s3+p3+d3,
        s4+p4+d4+f4,
        s5+p5+d5+f5,
        s6+p6+d6,
        s7+p7
    ]
    return camada
}
const get_camadaValencia = camada => {
    let camadaValencia = 
    camada[6]>0 ? 7 :
    camada[5]>0 ? 6 :
    camada[4]>0 ? 5 :
    camada[3]>0 ? 4 :
    camada[2]>0 ? 3 : 
    camada[1]>0 ? 2 : 1
    return camadaValencia
}
export {camadas, get_camadaValencia}