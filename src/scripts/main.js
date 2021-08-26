// This module will render all html. It is linked to index.html
import { fetchLetters, fetchPenPals, fetchTopics } from "./DataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

document.addEventListener("stateChanged", CustomEvent => {
    renderHTML()
    console.log("State changed, re-render HTML")
})

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchPenPals().then(fetchTopics).then(fetchLetters).then(
        () => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )
}


renderHTML()