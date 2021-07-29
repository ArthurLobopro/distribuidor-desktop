const get = (id: string) : any =>{ 
    return document.getElementById(id)
}

const range = (min: number,max: number,pass=1) => {
    let array = []
    for(let i = min;i<max;i+=pass){ array.push(i) }
    return array
}
export {get,range}