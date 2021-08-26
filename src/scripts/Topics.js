import { getTopics } from "./DataAccess.js"


export const Topics = () => {
    const topics = getTopics()
    const TopicAsRadioButton = (topic) => {
        return `
        <input type="radio" id="${topic.id}" name="topics" value=${topic.name}">
        <label for="${topic.name}">${topic.name}</label>`
    }
    return `${topics.map(TopicAsRadioButton).join("")}`
}
