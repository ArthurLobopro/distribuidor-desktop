const get = id => document.getElementById(id)
const range = (min,max,pass=1) => {
    let array = []
    for(let i = min;i<max;i+=pass){ array.push(i) }
    return array
}
export {get,range}