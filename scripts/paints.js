import { getPaintColors, setPaintColors } from "./database.js";

const paints = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            setPaintColors(parseInt(event.target.value))
            window.alert(`User chose color ${event.target.value}`)
        }
    }
)

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="color">'
    html += '<option value="0">Select a paint color</option>'

    for (const paint of paints) {
        html += 
        ` <option value="${paint.id}">${paint.color}</option> `
    }
    

    html += "</select>"
    return html
}