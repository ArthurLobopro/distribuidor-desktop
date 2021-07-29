import Header from "./components/header"
import Menu from "./components/Menu"
import Result from "./components/Result"
import Alert from "./components/Alert"

import { useState } from "react"

import "./index.css"
import iconImg from "../assets/white-atom.png"

export default function App() {

    const [state ,setState] = useState({result: [] , alert: {} })


    return (
        <>
            <Header windowName="Distribuidor Eletrônico" icon={iconImg}></Header>
            <div id="container">
                <Menu state={state} set={setState}/>
                
                <Result setState={setState} state={state}/>

                <Alert setState={setState} state={state}/>
                            
                <footer>&copy;Arthur Lobo</footer>
            </div>
        </>
    )
}