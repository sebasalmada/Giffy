import React, { useState, useEffect } from 'react'
import getSingleGif from 'services/getSingleGif'
import './singlegif.css'



export default function SingleGif ({id}) {
    const [gif, setGif] = useState([])

    useEffect(function () {
        getSingleGif({id})
        .then(gif => setGif(gif))
    }, [id])

    return (
        <div>
            <img className='singlegif' src={gif.url} alt={gif.title} />
            <h4>{gif.title}</h4>
        </div>
    )
}