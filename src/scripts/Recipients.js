import { getPenPals, setRecipients } from "./DataAccess.js"

document.addEventListener("change", event => {
    if (event.target.id === "recipientSelector"){
        const [ ,recipientId] = event.target.value.split("--")
        setRecipients(parseInt(recipientId))
    }
})

//This function returns a list of recipients to choose from
export const Recipients = () => {
    const penPalRecipients = getPenPals()
    const penPalAsRecipientOption = (penPalRecipient) => {
        return `<option value="recipient--${penPalRecipient.id}">${penPalRecipient.name}</option>`
    }
    return `
    <h2>Recipient</h2>
    <select id="recipientSelector">
        <option value="recipient--0">Choose recipient...</option>
        ${penPalRecipients.map(penPalAsRecipientOption).join("")}
    </select>
    `
}