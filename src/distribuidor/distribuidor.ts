export default function distribuidor(num: number) {
    let s1, s2, p2, s3, p3, d3, s4, p4, d4, f4, s5, p5, d5, f5, s6, p6, d6, s7, p7

    const dist = (quant:number) => {
        const ret = num - quant >= 0 ? quant : num
        num = num - quant >= 0 ? num - quant : 0
        return ret
    }

    s1 = dist(2)
    s2 = dist(2)
    p2 = dist(6)
    s3 = dist(2)
    p3 = dist(6)
    s4 = dist(2)
    d3 = dist(10)
    p4 = dist(6)
    s5 = dist(2)
    d4 = dist(10)
    p5 = dist(6)
    s6 = dist(2)
    f4 = dist(14)
    d5 = dist(10)
    p6 = dist(6)
    s7 = dist(2)
    f5 = dist(14)
    d6 = dist(10)
    p7 = dist(6)

    return { s1, s2, p2, s3, p3, d3, s4, p4, d4, f4, s5, p5, d5, f5, s6, p6, d6, s7, p7 }
}