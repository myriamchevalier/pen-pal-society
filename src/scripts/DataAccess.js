const applicationState = {
    currentLetter: {

    },
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

export const saveLetter = (newLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLetter)
    }

    return fetch(`${API}/letters`, fetchOptions)
        .then(res => res.json())
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getPenPals = () => {
    return applicationState.penPals.map(penPal => ({...penPal}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const setAuthors = (id) => {
    return applicationState.currentLetter.authorId = id
}

export const setTopics = (id) => {
    return applicationState.currentLetter.topicId = id
}

export const setRecipients = (id) => {
    return applicationState.currentLetter.recipientId = id
}
