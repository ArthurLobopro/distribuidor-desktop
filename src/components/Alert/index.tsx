import "./style.css"

function Alert({ state, setState} ) : JSX.Element | null{
    function removeAlert() {
       setState({
           ...state,
           alert: {}
       })
    }

    const { title, text, center = true, animation = true } = state.alert
   
    if(title && text){
        const div = (
            <div id="alert" className="full">
                <div id="alert-interior" className={animation ? "down" : ""}
                style={ { alignSelf: center ? "center": "flex-start;", marginTop: "5px" }}>
                    <div className="title">{title}</div>
                    <div className="text"> {text}</div>
                    <button id="remove-alert" onClick={removeAlert}>
                        OK
                    </button>
                </div>
            </div>
        )
        
        return div
    }

    return null
}



export default Alert