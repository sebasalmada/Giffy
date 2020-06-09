import React from 'react'
import { Link } from 'wouter'
import './gif.css'


export default function Gif({ title, id, url }) {
    return (
        <div className='gif'>
            <Link to={`/gif/${id}`}>
                <img src={url} alt={title} />
            </Link>
        </div>
    )
}