import { ChangeEvent, useState } from "react"
import SubInput from "./SubInput"
import bpde from "../../distribuidor/main-functions/bpde"
import bpna from "../../distribuidor/main-functions/bpna"
import bpn from "../../distribuidor/main-functions/bpn"
import bps from "../../distribuidor/main-functions/bps"

interface MenuProps{
    state: AppState,
    set: CallableFunction
}

function bpdeClick(state: AppState, setState: CallableFunction){
    const newState = bpde(state)
    setState(newState)
}

function numatClick(state: AppState, setState: CallableFunction) {
    const newState = bpna(state)
    setState(newState)
}

function nameClick(state: AppState, setState: CallableFunction) {
    const newState = bpn(state)
    setState(newState)
}

function symbolClick(state: AppState, setState: CallableFunction) {
    const newState = bps(state)
    setState(newState)
}

function autoSubmit(event, callback: CallableFunction, ...calbackParams) {
    const key = event.key
    if(key === "Enter"){
        callback(...calbackParams)
    }
}

const menus = {
    dist(state: AppState, setState: CallableFunction){
        return (
            <div id="dist">
                <div className="center">Buscar por distribuição</div><br/>
                <div id="sub-inputs">
                    <SubInput id="1s"/><br/>
                    <SubInput id="2s"/>
                    <SubInput id="2p"/><br/>
                    <SubInput id="3s"/>
                    <SubInput id="3p"/>
                    <SubInput id="3d"/><br/>
                    <SubInput id="4s"/>
                    <SubInput id="4p"/>
                    <SubInput id="4d"/>
                    <SubInput id="4f"/><br/>
                    <SubInput id="5s"/>
                    <SubInput id="5p"/>
                    <SubInput id="5d"/>
                    <SubInput id="5f"/><br/>
                    <SubInput id="6s"/>
                    <SubInput id="6p"/>
                    <SubInput id="6d"/><br/>
                    <SubInput id="7s"/>
                    <SubInput id="7p"/><br/><br/>
                </div>
                Carga: <input 
                            type="number" id="dist-carga" defaultValue="0" className="carga" 
                            onKeyDown={event => autoSubmit(event, bpdeClick, state,setState)}
                        /><br/><br/>
                <input type="button" defaultValue="Enviar" id="bpde-btn" onClick={ () => bpdeClick(state,setState) }/>
                <input type="button" defaultValue="Limpar" id="clean-btn"/><br/><br/>
            </div>
        )
    },
    numat(state: AppState, setState: CallableFunction){
        return (
            <div id="numat">
                <span className="width_full">Buscar por Número Atômico(número de prótons).</span>
                <div>
                    Num. Atômico:
                    <input 
                        type="number" min="1" max="118" 
                        id="num" autoComplete="off" onKeyDown={event => autoSubmit(event, numatClick, state,setState)}
                    /><br/><br/>
                    Carga: 
                    <input type="number" id="bpna-carga" defaultValue="0" className="carga"/>
                    <button  onClick={ () => numatClick(state,setState)}>Enviar</button>
                </div>
            </div>
        )
    },
    name(state: AppState, setState: CallableFunction){
        return (
            <div id="name">
                <div id="central">
                    <div className="center">
                        Busca por nome:<br/> <input type="text" id="nome" onKeyDown={event => autoSubmit(event, nameClick, state,setState)}/> 
                        <button onClick={ () => nameClick(state,setState)}>Buscar</button><br/>
                        Busca por símbolo:<br/> <input type="text" id="simbolo" onKeyDown={event => autoSubmit(event, symbolClick, state,setState)}/>
                        <button onClick={ () => symbolClick(state,setState) }>Buscar</button>
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
            let newState = []

            for(let i = 1; i<=118; i++){
                newState = bpna({result:newState}, i).result
            }

            const state = props.state
            
            props.set({
                ...state,
                result: [...state.result,...newState]
            })
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