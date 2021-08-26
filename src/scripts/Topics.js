import { getTopics, setTopics } from "./DataAccess.js"


export const Topics = () => {
    const topics = getTopics()
    const TopicAsRadioButton = (topic) => {
        return `
        <input type="radio" id="topics" name="topics" value="${topic.id}">
        <label for="${topic.name}">${topic.name}</label>`
    }
    return `${topics.map(TopicAsRadioButton).join("")}`
}
