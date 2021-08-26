//This module will contain the HTML frame for the whole page

import { Authors } from "./Authors.js"
import { Recipients } from "./Recipients.js"



export const PenPalSociety = () => {
    return `
        <h1>Pen Pal Society</h1>
        
        <section id="letterForm">
        ${Authors()}
        ${Recipients()}
            Insert LetterForm module here
        </section>

        <section id="letter">
            Insert Letters module here
        </section>
        `
}