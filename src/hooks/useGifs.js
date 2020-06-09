import { useState, useEffect } from 'react'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

export function useGifs ({ keyword } = { keyword: localStorage.getItem('keyword') }) {
    const [gifs, setGifs] = useState([])
    const [page, setPage] = useState(INITIAL_PAGE)

    useEffect(() => {
        getGifs({keyword})
        .then(searchgifs => setGifs(searchgifs))
    }, [keyword, setGifs])

    useEffect(() => {
        if(page === INITIAL_PAGE) return
        getGifs({keyword, page})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
            })
    }, [page, keyword, setGifs])
    

    return {gifs, setPage}
}
