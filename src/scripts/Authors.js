
//Need to export html for select menu for Authors/

import { getPenPals } from "./DataAccess.js"

export const Authors = () => {
    const penPalAuthors = getPenPals()
    const penPalAsAuthorOption = (penPalAuthor) => {
        return `<option value="author--${penPalAuthor.id}">${penPalAuthor.name}</option>`
    }
    return `
    <h2>Author</h2>
    <select id="authorSelector">
        <option value="author--0">Choose author...</option>
        ${penPalAuthors.map(penPalAsAuthorOption).join("")}
    </select>
    `
}