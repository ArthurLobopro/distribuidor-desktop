import Header from "./components/Header"
import Menu from "./components/Menu"
import Result from "./components/Result"
import Alert from "./components/Alert"

import { useState } from "react"

import "./index.css"
import iconImg from "../assets/white-atom.png"

export default function App() {

    const [state ,setState] = useState({result: [] })


    return (
        <>
            <Header windowName="Distribuidor Eletrônico" icon={iconImg}></Header>
            <div id="container">
                <Menu/>
                
                <Result/>

                <Alert/>
                            
                <footer>&copy;Arthur Lobo</footer>
            </div>
        </>
    )
}