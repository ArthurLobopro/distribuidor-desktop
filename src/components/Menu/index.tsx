import { ChangeEvent, useState } from "react"
import bpde from "../../distribuidor/main-functions/bpde"

interface MenuProps{
    state: AppState,
    set: CallableFunction
}

function bpdeClick(state: AppState, setState: CallableFunction){
    const newState = bpde(state)
    setState({...newState})
}

const menus = {
    dist(state, setState){
        return (
            <div id="dist">
                <div className="center">Buscar por distribuição</div><br/>
                <div id="sub-inputs">
                    1s<input type="number" id="1s" defaultValue="1" min="1" max="2" className="number"/><br/>
                    2s<input type="number" id="2s" defaultValue="0" min="0" max="2" className="number"/>
                    2p<input type="number" id="2p" defaultValue="0" min="0" max="6" className="number"/><br/>
                    3s<input type="number" id="3s" defaultValue="0" min="0" max="2" className="number"/>
                    3p<input type="number" id="3p" defaultValue="0" min="0" max="6" className="number"/>
                    3d<input type="number" id="3d" defaultValue="0" min="0" max="10" className="number"/><br/>
                    4s<input type="number" id="4s" defaultValue="0" min="0" max="2" className="number"/>
                    4p<input type="number" id="4p" defaultValue="0" min="0" max="6" className="number"/>
                    4d<input type="number" id="4d" defaultValue="0" min="0" max="10" className="number"/>
                    4f<input type="number" id="4f" defaultValue="0" min="0" max="14" className="number"/><br/>
                    5s<input type="number" id="5s" defaultValue="0" min="0" max="2" className="number"/>
                    5p<input type="number" id="5p" defaultValue="0" min="0" max="6" className="number"/>
                    5d<input type="number" id="5d" defaultValue="0" min="0" max="10" className="number"/>
                    5f<input type="number" id="5f" defaultValue="0" min="0" max="14" className="number"/><br/>
                    6s<input type="number" id="6s" defaultValue="0" min="0" max="2" className="number"/>
                    6p<input type="number" id="6p" defaultValue="0" min="0" max="6" className="number"/>
                    6d<input type="number" id="6d" defaultValue="0" min="0" max="10" className="number"/><br/>
                    7s<input type="number" id="7s" defaultValue="0" min="0" max="2" className="number"/>
                    7p<input type="number" id="7p" defaultValue="0" min="0" max="6" className="number"/><br/><br/>
                </div>
                Carga: <input type="number" id="dist-carga" defaultValue="0" className="carga"/><br/><br/>
                <input type="button" defaultValue="Enviar" id="bpde-btn" onClick={ () => bpdeClick(state,setState) }/>
                <input type="button" defaultValue="Limpar" id="clean-btn"/><br/><br/>
            </div>
        )
    },
    numat(){
        return (
            <div id="numat">
                <span className="width_full">Buscar por Número Atômico(número de prótons).</span>
                <div>
                    Num. Atômico:
                    <input type="number" min="1" max="118" id="num" autoComplete="off"/><br/><br/>
                    Carga: 
                    <input type="number" id="bpna-carga" defaultValue="0" className="carga"/>
                    <input type="button" defaultValue="Enviar" id="bpna"/>
                </div>
            </div>
        )
    },
    name(){
        return (
            <div id="name">
                <div id="central">
                    <div className="center">
                        Busca por nome:<br/> <input type="text" id="nome"/> 
                        <input type="button" id="bpn" defaultValue="Buscar"/><br/>
                        Busca por símbolo:<br/> <input type="text" id="simbolo" />
                        <input type="button" id="bps" defaultValue="Buscar"/>
                    </div><br/>
                    <span className="msg"><span className="atention">Atenção!!!</span> O programa não é case sensitive, porém é necessário por os acentos.</span>
                </div>
            </div>
        )
    }
}

export default function Menu(props:MenuProps) {
    const [atualMenu, setMenu] = useState('dist')

    function HandleChange(event:ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value   
        
        if(value === "all"){
            return 
        }
        
        setMenu(value)
    }

    return (
        <section id="menu">

            <div id="content">
                {
                    menus[atualMenu]?.(props.state, props.set)
                }
            </div>

            <div id="div-input-type">
                Buscar por: 
                <select id="input-type" defaultValue='dist' onChange={HandleChange}>
                    <option value="dist">Distribuição.</option>
                    <option value="numat">Número Atômico.</option>
                    <option value="name">Nome ou símbolo.</option>
                    <option value="all">Mostrar Todos.</option>
                </select>
            </div>
        </section>
    )
}