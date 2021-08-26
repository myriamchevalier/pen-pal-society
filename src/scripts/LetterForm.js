import { Topics } from "./Topics.js";
import { Authors } from "./Authors.js";
import { Recipients } from "./Recipients.js";
import { saveLetter } from "./DataAccess.js";

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "sendButton"){
        const authorId = parseInt(document.querySelector("#authorSelector").value)
        const topicId = parseInt(document.querySelector("#topics").value)
        const recipientId = parseInt(document.querySelector("#recipientSelector").value)
        const text = document.querySelector("textarea[name='letterText']").value
        const timestamp = Date.now()

        
        const dataToAPI = {
            authorId: authorId,
            letterText:text,
            topicId: topicId,
            recipientId: recipientId,
            timestamp: timestamp
    }
    saveLetter(dataToAPI)
}
})

export const LetterForm = () => {
    return `
    ${Authors()}
    <h2>Letter</h2>
    <textarea id="letterText" name="letterText"></textarea>
    ${Topics()}
    ${Recipients()}
    <button id="sendButton">Send Letter</button>
    `
}