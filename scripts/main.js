
import { KneelDiamonds } from "./KneelDiamonds.js"
import { getMetals, setMetal } from "./database.js"
import { getOrders } from "./database.js"
import{addCustomOrder} from "./database.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", () => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})






