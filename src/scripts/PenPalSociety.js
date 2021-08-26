import { LetterForm } from "./LetterForm.js"

//This module will contain the HTML frame for the whole page
export const PenPalSociety = () => {
    return `
        <h1>Pen Pal Society</h1>
        
        <section id="letterForm">
        ${LetterForm()}
        </section>

        <section id="letter">
            Insert Letters module here
        </section>
        `
}