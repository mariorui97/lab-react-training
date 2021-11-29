import React from 'react'

function Rating(prop) {
    const rating = Math.round(Number(prop.children))
    const star = '★'.repeat(rating) + '☆'.repeat(5 - rating)

    return (
        <>
            <h1>{star}</h1>
        </>
    )
}

export default Rating
