import React from 'react'
// import getGifs from 'services/getGifs'
import Gif from 'components/Gif'
import './listofgifs.css'


export default function ListOfGifs ({gifs}) {
    // const [gifs, setGifs] = useState([])

    // useEffect(function () {
    //     getGifs({keyword})
    //     .then(gifs => setGifs(gifs))
    // }, [])

    return (
        <div className='listofgifs'>
            {
                gifs.map(({title, id, url}) => 
                    <Gif
                        id={id}
                        key={id}
                        title={title}
                        url={url}
                    />
                )
            }
        </div>
    )
}