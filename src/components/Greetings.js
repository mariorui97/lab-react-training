import React from 'react'

function Greetings(props) {
    const {lang} = props

    const sentence = {
        'en' : 'Hello',
        'de' : 'Moin',
        'es' : 'Hola',
        'fr' : 'Bonjour'
    }

    return (
        <div>
            <h2>{sentence[lang]} {props.children}</h2>
        </div>
    )
}

export default Greetings
