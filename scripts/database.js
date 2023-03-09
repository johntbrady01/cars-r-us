const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 965 }
    ],
    interiors: [
        { id: 1, seatType:"Beige Fabric", price: 405 },
        { id: 2, seatType: "Charcoal Fabric", price: 782 },
        { id: 3, seatType: "White Leather", price: 1470 },
        { id: 4, seatType: "Black Leather", price: 1997 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 12.42 },
        { id: 2, package: "Navigation Package", price: 736.4 },
        { id: 3, package: "Visibility Package", price: 1258.9 },
        { id: 4, package: "Ultra Package", price: 795.45 }
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 12.42 },
        { id: 2, type: "17-inch Pair Radial Black", price: 736.4 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 1258.9 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 795.45 }
    ], 
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 3,
            technologyId: 1,
            wheelId:2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: []

}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor=> ({...paintColor}))

}
export const getInteriors = () => {
    return database.interiors.map(interior=> ({...interior}))

}
export const getTechnologies = () => {
    return database.technologies.map(technology=> ({...technology}))

}
export const getWheels = () => {
    return database.wheels.map(wheel=> ({...wheel}))

}



export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setPaintColors = (id) => {
    database.orderBuilder.paintId = id
}

export const setTechnologies = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const setIntertior = (id) => {
    database.orderBuilder.interiorId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
