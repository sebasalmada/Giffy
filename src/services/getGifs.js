import { API_KEY, API_URL } from './settings'


export default async function getGifs ({limit = 20, keyword = 'messi', page = 0} = {}) {
    const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=G&lang=en`

    localStorage.setItem('keyword', keyword)

    return fetch(url) 
        .then(res => res.json())
        .then(response =>{
            const {data} = response
            const gifs = data.map(image => {
                const {images, title, id} = image
                const {url} = images.downsized_medium
                return {id, title, url}
            })
            return gifs
        })
}

