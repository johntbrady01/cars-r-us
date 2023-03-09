import { getTechnologies, setTechnologies } from "./database.js";

const technolgies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
            setTechnologies(parseInt(event.target.value))
            window.alert(`User chose technology package ${event.target.value}`)
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="technology">'
    html += '<option value="0">Select a package</option>'

    for (const technology of technolgies) {
        html += 
        ` <option value="${technology.id}">${technology.package}</option> `
    }
    

    html += "</select>"
    return html
}