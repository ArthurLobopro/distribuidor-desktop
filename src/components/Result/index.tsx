import circle from "../../../assets/close-icon.png"

interface ResultProps {
    state: AppState, 
    setState: CallableFunction
}

export default function Result({state, setState} : ResultProps) {
    if(state.result.length !== 0){

        function HandleClick() {
            setState({
                ...state,
                result: []
            })
        }

        function removeResult(index:number) {
            setState({
                ...state,
                result: state.result.filter( res => res.index !== index)
            })
        }

        return (
            <section id="res">
                <span id="msg">
                    Buscas feitas:
                    <div className="circle" id="remove-All" onClick={HandleClick}>
                        <img src={circle}/>
                    </div>
                </span><br/>
                {
                    state.result.map( ({ content, index }) => {
                        return(
                            <div className="res">
                                <div className="circle" onClick={ () => removeResult(index)}>
                                    <img src={circle}/>
                                </div>
                                <div className="coluns">
                                    <div>{content[0]}</div>
                                    <div>{content[1]}</div>
                                    <div>{content[2]}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        )
    }else{
        return <></>
    }

    
}