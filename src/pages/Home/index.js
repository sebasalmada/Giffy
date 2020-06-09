import React from 'react'
import { useLocation } from 'wouter'
import {useGifs} from 'hooks/useGifs'
import SearchForm from 'components/SearchForm/'
import ListOfGifs from 'components/ListOfGifs'
import LazyTrendings from 'components/TrendingSearches'
import './home.css'

export default function Home() {
    const [_, pushLocation] = useLocation()
    const {gifs} = useGifs()

    
    const handleSubmitSearchForm = ({keyword}) => {
        pushLocation(`/search/${keyword}`)
    }
 
    return (
        <div className='home'>
            <SearchForm onSubmit={handleSubmitSearchForm}/>
            <div className='Listado'>
                <ListOfGifs gifs={gifs} />
            </div>
            <LazyTrendings />
        </div>
    )
}