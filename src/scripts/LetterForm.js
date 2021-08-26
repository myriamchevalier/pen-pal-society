import { Topics } from "./Topics.js";
import { Authors } from "./Authors.js";
import { Recipients } from "./Recipients.js";

export const LetterForm = () => {
    return `
    ${Authors()}
    <h2>Letter</h2>
    <textarea id="letterText" name="letterText"></textarea>
    ${Topics()}
    ${Recipients()}
    `
}