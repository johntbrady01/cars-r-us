import { getOrders, getWheels, getInteriors, getTechnologies, getPaintColors } from "./database.js"

const buildOrderListItem = (order) => {

    const wheels = getWheels()
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

        const interior = getInteriors()
        const foundInterior = interior.find(
            (interior) => {
                return interior.id === order.interiorId
            }

        )

        const technologies = getTechnologies()
        const foundTechnology = technologies.find(
            (technology) => {
                return technology.id === order.technologyId

            }

        )

        const paints = getPaintColors()
        const foundPaint = paints.find(
            (paint) => {
                return paint.id === order.paintId

            }

        )

        const totalCost = foundWheels.price + foundInterior.price + foundTechnology.price + foundPaint.price

        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        
        return `<li class='customCars'>
            ${foundPaint.color} car with ${foundWheels.type}, ${foundInterior.seatType} interior, and the ${foundTechnology.package} for a total cost of ${costString}
        </li>`
        }

        export const Orders = () => {
        
            const orders = getOrders()
        
            let html = "<ul>"
        
            const listItems = orders.map(buildOrderListItem)
        
            html += listItems.join("")
            html += "</ul>"
        
            return html
        }
        