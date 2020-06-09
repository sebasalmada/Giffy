import React, { useEffect, useState } from 'react'
import getTrendingTerms from 'services/getTrendingTerms'
import { Link } from 'wouter'

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])

    return (
        <div className='trendingsearches'>
            <h4>Tendencias Actuales</h4>
            <ul>
                {
                    trends.map(singleTrend => {
                        return(
                            <Link to={`/search/${singleTrend}`} key={singleTrend}>
                                <li>{singleTrend}</li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}