import "./style.css"
import tracoImg  from "../../../assets/windowsIcons/traco.png"
import expandImg from "../../../assets/windowsIcons/expand.png"
import closeImg from "../../../assets/windowsIcons/x.png"
import { IpcRenderer } from "electron"

declare const ipcRenderer : IpcRenderer

const minimize = ()=> ipcRenderer.send('minimize') 
const expand = () => ipcRenderer.send('expand')
const close = () => ipcRenderer.send('close')

interface HeaderProps{
    windowName: string,
    icon?: string
}

function Title(props:HeaderProps) {
    if(props.icon){
        return (
            <>
                <div id="window-icon">
                        <img src={props.icon ?? ""}/>
                </div>
                <div id="window-name">{props.windowName}</div>
            </>
        )
    }

    return (
        <div id="window-name">{props.windowName}</div>
    )
}

export default function Header(props:HeaderProps) {
    return (
        <div id="electron-header">
            <div className="left">
                <Title {...props} />
            </div>
            <div className="right">
                <div onClick={minimize}>
                    <img src={tracoImg} alt="Minimaze" title="Minimizar" id="minimize"/>
                </div>
                <div onClick={expand}>
                    <img src={expandImg} alt="Maximize" title="Expandir" id="expand"/>
                </div>
                <div onClick={close}>
                    <img src={closeImg} alt="Close" title="Fechar" id="close"/>
                </div>
            </div>
        </div>
    )
}