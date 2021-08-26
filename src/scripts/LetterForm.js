import { Topics } from "./Topics.js";
import { Authors } from "./Authors.js";
import { Recipients } from "./Recipients.js";

document.addEventListener("click", clickEvent => {
    if(clickEvent)
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