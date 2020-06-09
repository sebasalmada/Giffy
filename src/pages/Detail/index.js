import React from 'react'
import SingleGif from 'components/SingleGif'

export default function Detail ({ params }) {
    const { id } = params

    return (
        <SingleGif id={id} />
    )

}