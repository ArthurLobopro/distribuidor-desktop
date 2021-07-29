import { get } from "../../distribuidor/util"
function getMinMax(id: string) {
    if(id === "1s"){
        return [1,2]
    }

    const maxValues = {
        "s": 2,
        "p": 6,
        "d": 10,
        "f": 14
    }
    return [0 , maxValues[id[1]]]
}

const subcamadas = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"]

function subInputSubmit(event) {
    const dist_carga = get("dist-carga")
    const id = String(event.target.id)
    const key = event.key
    if(key === 'Enter'){
        event.target.id !== "7p" ? 
            get(subcamadas[ subcamadas.indexOf(id) +1 ]).focus() : dist_carga.focus()
    }
    if(key === 'c' || key === 'C' ){
        for(let i of subcamadas){
            if(i !== id){ get(i).value = get(i).max }
            else{ break }
        }
    }
    if(key === 'm' || key ==='M'){ get(id).value = get(id).max }
}

type SubInputProps = {
    id: string
}

export default function SubInput( { id } : SubInputProps) {
    const [min,max] = getMinMax(id)
    return(
        <>
            {id}<input 
                type="number" id={id} defaultValue={min} min={min} max={max} className="number"
                onKeyDown = { subInputSubmit }
            />
        </>
    )
}