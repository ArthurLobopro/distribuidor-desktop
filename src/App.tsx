import Header from "./components/header"
import Menu from "./components/Menu"

import "./index.css"
import iconImg from "../assets/white-atom.png"
console.log(iconImg);

export default function App() {
    return (
        <>
            <Header windowName="Distribuidor Eletrônico" icon={iconImg}></Header>
            <div id="container">
                <Menu/>
            </div>
        </>
    )
}