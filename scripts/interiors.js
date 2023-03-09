import { getInteriors, setIntertior } from "./database.js";

const interiors = getInteriors()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setIntertior(parseInt(event.target.value))
            window.alert(`User chose interior ${event.target.value}`)
        }
    }
)


export const Interiors = () => {
    let html = "<h2>Interior</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior</option>'

    for (const interior of interiors) {
        html += 
        ` <option value="${interior.id}">${interior.seatType}</option> `
    }
    

    html += "</select>"
    return html
}