import { API_URL, API_KEY } from './settings'

export default function getTrendingTerms() {
    const url = `${API_URL}/trending/searches?api_key=${API_KEY}`

    return fetch(url)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            return data
        })
}