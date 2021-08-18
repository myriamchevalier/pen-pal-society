// This module will render all html. It is linked to index.html
import { PenPalSociety } from "./PenPalSociety.js"


const mainContainer = document.querySelector("#container")

const renderHTML = () => { mainContainer.innerHTML = PenPalSociety()}


renderHTML()