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

type SubInputProps = {
    id: string
}

export default function SubInput( { id } : SubInputProps) {
    const [min,max] = getMinMax(id)
    return(
        <>
            {id}<input type="number" id={id} defaultValue={min} min={min} max={max} className="number"/>
        </>
    )
}