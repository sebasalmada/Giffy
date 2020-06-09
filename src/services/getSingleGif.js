import { API_KEY, API_URL } from './settings'


export default function getSingleGif ({id}) {
    const url = `${API_URL}/gifs/${id}?api_key=${API_KEY}`

    return fetch(url) 
        .then(res => res.json())
        .then(response =>{
            const {data} = response
            const gif = () => {
                const {images, title, id} = data
                const url = images.downsized_medium.url
                return {id, title, url}
            }
            return gif
        })
}

