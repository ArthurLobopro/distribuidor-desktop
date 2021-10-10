import circle from "../../../assets/close-icon.png"

import { resultState } from '../../state'

export default function Result() {
    const [result, setResult] = resultState( state => [state.result, state.setResult] )
    

    if (result.length !== 0) {

        function HandleClick() {
            setResult([])
        }

        function removeResult(index: number) {
            setResult(
               result.filter(res => res.index !== index)
            )
        }

        return (
            <section id="res">
                <span id="msg">
                    Buscas feitas:
                    <div className="circle" id="remove-All" onClick={HandleClick}>
                        <img src={circle} />
                    </div>
                </span><br />
                {
                    result.map(({ content, index }) => {
                        return (
                            <div className="res">
                                <div className="circle" onClick={() => removeResult(index)}>
                                    <img src={circle} />
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
    } else {
        return <></>
    }


}