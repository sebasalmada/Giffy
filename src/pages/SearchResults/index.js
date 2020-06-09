import React, { useRef, useEffect, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import './searchresults.css'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults ({ params }) {
    const { keyword } = params
    const {gifs, setPage} = useGifs({ keyword })
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({ 
        externalRef,
        once: false
    })
    
    const debounceHandleNextPage = useCallback(debounce(() => setPage(prevPage => prevPage +1), 500), [])
    

    useEffect(() => {
        console.log(isNearScreen)
        if(isNearScreen) debounceHandleNextPage() 
    }, [isNearScreen, debounceHandleNextPage])
    
    return (
        <div>
            <h2>{decodeURI(keyword)}</h2>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
        </div>
    )

}