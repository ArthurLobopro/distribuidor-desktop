const target = document.getElementById("container")

function alert({title, text, center = true, animation = true}) {
    title = title ?? window.location.hostname + " diz"
    const div = document.createElement('div')
    div.classList.add("full")
    div.id = "alert"
    div.innerHTML = `
    <div id="alert-interior" class="${animation ? "down" : ""}"
    style="align-self:${center ? "center": "flex-start;margin-top: 5px"}">
        <div class="title">${title}</div>
        <div class="text"> ${text}</div>
        <button id="remove-alert">
            OK
        </button>
    </div>
    `
    target.appendChild(div)
    document.getElementById("remove-alert").onclick = removeAlert
}

function removeAlert() {
    const div = document.querySelector("#alert.full")
    target.removeChild(div)
}


if(!document.getElementById("alert-style")){
    let path = window.location.pathname
    path = path.split("/")
    path.pop()
    path.shift()
    path = path.join('/') + "/electron/browser-functions/style.css"
    const css = document.createElement('link')
    css.rel = "stylesheet"
    css.href = path
    css.id = "alert-style"
    document.querySelector('head').appendChild(css)
}


export default alert