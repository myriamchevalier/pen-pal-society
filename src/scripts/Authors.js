import { getPenPals, setAuthors } from "./DataAccess.js"

document.addEventListener("change", event => {
    if (event.target.id === "authorSelector"){
        const [ ,authorId] = event.target.value.split("--")
        setAuthors(parseInt(authorId))
    }
})

//This function returns a list of authors to choose from
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