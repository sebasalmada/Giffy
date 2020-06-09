import React, { useState } from 'react'
import './searchform.css'

export default function SearchForm ({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleChange = (e) => {
        setKeyword(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({keyword})
    }

    return (
        <form className='searchform' onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input placeholder='gif a buscar' onChange={handleChange} type='text' value={keyword}/>
        </form>
    )
}