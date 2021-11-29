import React from 'react'
import Rating from './Rating'

function DriverCard(prop) {
    const{name, rating, img, car:{model, licensePlate}} = prop

    return (
        <div>
            <img src={img} alt="" height="50px" width="50px"/>
            <h1>{name}</h1>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>
        </div>
    )
}

export default DriverCard
