import {useState, useRef, useEffect} from 'react'

export default function useNearScreen ({ distance = '100px ', externalRef, once = true } = {}) {
    const [isNearScreen, setIsNearScreen] = useState(false)
    const fromRef = useRef()

    useEffect(() => {

        const element = externalRef ? externalRef.current : fromRef.current

        const onChange = (entries, observer) => {
            //entries es el array que observamos en el .observe
            const el = entries[0]
            if(el.isIntersecting) {
                setIsNearScreen(true)
                //desconectar el observer cuando se usa la primera vez
                once && observer.disconnect()
            } else {
                !once && setIsNearScreen(false)
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })
        //el elementRef.current es el valor de la referencia
        observer.observe(element)

        return () => observer.disconnect()
    })

    return {isNearScreen, fromRef}
}