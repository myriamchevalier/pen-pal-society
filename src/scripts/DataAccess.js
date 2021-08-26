const applicationState = {
    penPals: [],
    topics: [],
    letters: []
}

const API = "http://localhost:8088"

export const fetchPenPals = () => {
    return fetch(`${API}/penPals`)
    .then (res => res.json())
    .then (
        (fetchedPenPals) => {
            applicationState.penPals = fetchedPenPals
        }
    )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then (res => res.json())
    .then (
        (fetchedTopics) => {
            applicationState.topics = fetchedTopics
        }
    )
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
    .then (res => res.json())
    .then (
        (fetchedLetters) => {
            applicationState.letters = fetchedLetters
        }
    )
}

export const getPenPals = () => {
    return applicationState.penPals.map(penPal => ({...penPal}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}