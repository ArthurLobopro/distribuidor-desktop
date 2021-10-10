import { ChangeEvent, KeyboardEvent, useState } from "react"
import SubInput from "./SubInput"
import bpde from "../../distribuidor/main-functions/bpde"
import bpna from "../../distribuidor/main-functions/bpna"
import bpn from "../../distribuidor/main-functions/bpn"
import bps from "../../distribuidor/main-functions/bps"

import { useMenu, resultState, alertState } from "../../state";

function autoSubmit(event: KeyboardEvent<HTMLInputElement>, callback: CallableFunction, ...calbackParams: (any[] | CallableFunction)[]) {
    const key = event.key
    if (key === "Enter") {
        callback(...calbackParams)
    }
}

const menus = {
    dist(result: any[], setResult: CallableFunction, setAlert: CallableFunction) {
        function bpdeClick() {
            setResult([...result, { content: bpde(setAlert), index: result.length }])
        }

        return (
            <div id="dist">
                <div className="center">Buscar por distribuição</div><br />
                <div id="sub-inputs">
                    <SubInput id="1s" /><br />
                    <SubInput id="2s" />
                    <SubInput id="2p" /><br />
                    <SubInput id="3s" />
                    <SubInput id="3p" />
                    <SubInput id="3d" /><br />
                    <SubInput id="4s" />
                    <SubInput id="4p" />
                    <SubInput id="4d" />
                    <SubInput id="4f" /><br />
                    <SubInput id="5s" />
                    <SubInput id="5p" />
                    <SubInput id="5d" />
                    <SubInput id="5f" /><br />
                    <SubInput id="6s" />
                    <SubInput id="6p" />
                    <SubInput id="6d" /><br />
                    <SubInput id="7s" />
                    <SubInput id="7p" /><br /><br />
                </div>
                Carga: <input
                    type="number" id="dist-carga" defaultValue="0" className="carga"
                    onKeyDown={event => autoSubmit(event, bpdeClick)}
                /><br /><br />
                <input type="button" defaultValue="Enviar" id="bpde-btn" onClick={bpdeClick} />
                <input type="button" defaultValue="Limpar" id="clean-btn" /><br /><br />
            </div>
        )
    },
    numat(result: any[], setResult: CallableFunction, setAlert: CallableFunction) {

        function numatClick() {
            setResult([...result, { content: bpna(null, setAlert), index: result.length }])
        }

        return (
            <div id="numat">
                <span className="width_full">Buscar por Número Atômico(número de prótons).</span>
                <div>
                    Num. Atômico:
                    <input
                        type="number" min="1" max="118"
                        id="num" autoComplete="off" onKeyDown={event => autoSubmit(event, numatClick)}
                    /><br /><br />
                    Carga:
                    <input type="number" id="bpna-carga" defaultValue="0" className="carga" />
                    <button onClick={numatClick}>Enviar</button>
                </div>
            </div>
        )
    },
    name(result: any[], setResult: CallableFunction, setAlert: CallableFunction) {

        function symbolClick() {
            setResult([...result, { content: bps(setAlert), index: result.length }])
        }

        function nameClick() {
            setResult([...result, { content: bpn(setAlert), index: result.length }])
        }

        return (
            <div id="name">
                <div id="central">
                    <div className="center">
                        Busca por nome:<br /> <input type="text" id="nome" onKeyDown={event => autoSubmit(event, nameClick)} />
                        <button onClick={() => nameClick()}>Buscar</button><br />
                        Busca por símbolo:<br /> <input type="text" id="simbolo" onKeyDown={event => autoSubmit(event, symbolClick)} />
                        <button onClick={symbolClick}>Buscar</button>
                    </div><br />
                    <span className="msg"><span className="atention">Atenção!!!</span> O programa não é case sensitive, porém é necessário por os acentos.</span>
                </div>
            </div>
        )
    }
}

export default function Menu() {
    const [mode, setMode] = useMenu(state => [state.mode, state.setMode])

    const [result, setResult] = resultState(state => [state.result, state.setResult])

    const setAlert = alertState(state => state.setAlert)

    function HandleChange(event: ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value

        if (value === "all") {
            let results = []

            setResult([])

            for (let i = 1; i <= 118; i++) {
                results.push({ content: bpna(i, setAlert), index: i })
            }

            setResult(results)
            return
        }

        setMode(value)
    }

    return (
        <section id="menu">

            <div id="content">
                {
                    menus[mode]?.(result, setResult, setAlert)
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