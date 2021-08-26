import { getTopics, setTopics } from "./DataAccess.js"

document.addEventListener("change", event => {
    if (event.target.name === "topics"){
       setTopics(parseInt(event.target.id))
    }
})

export const Topics = () => {
    const topics = getTopics()
    const TopicAsRadioButton = (topic) => {
        return `
        <input type="radio" id="${topic.id}" name="topics" value="${topic.name}">
        <label for="${topic.name}">${topic.name}</label>`
    }
    return `${topics.map(TopicAsRadioButton).join("")}`
}
