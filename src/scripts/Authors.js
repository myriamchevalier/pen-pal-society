import { getPenPals, setAuthors } from "./DataAccess.js"


//This function returns a list of authors to choose from
export const Authors = () => {
    const penPalAuthors = getPenPals()
    const penPalAsAuthorOption = (penPalAuthor) => {
        return `<option name="author" value="${penPalAuthor.id}">${penPalAuthor.name}</option>`
    }
    return `
    <h2>Author</h2>
    <select id="authorSelector">
        <option value="0">Choose author...</option>
        ${penPalAuthors.map(penPalAsAuthorOption).join("")}
    </select>
    `
}