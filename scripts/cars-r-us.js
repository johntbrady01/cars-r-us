
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { Paints } from "./paints.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const htmlString = () => {
    return `
    <div class='headerContainer'>
        <h1>Cars 'R Us: Personal Car Builder</h1>
    </div>

        <div class='center'>
        <article class="choicesContainer">
        <section class="choices">
            ${Paints()}
        </section>
        <section class="choices">
            ${Interiors()}
        </section>
        <section class="choices">
            ${Wheels()}
        </section>
        <section class="choices">
        ${Technologies()}
    </section>
    </article>  
    </div>

    <article class="buttonContainer">
    <button id="orderButton">Place Car Order</button>
</article>


<article class="customOrders">
    <div class='headerContainer'>
    <h2>Custom Car Orders</h2>
    </div>
    <section class="orders">
    ${Orders()}
    </section>
</article>
    `
}   