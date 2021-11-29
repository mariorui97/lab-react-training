import React from 'react'

function LikeButton() {
    let [number, setNumber] = React.useState(0) 
    const backgrounds = ['purple','blue','green','yellow','orange','red']
    const currentBackground = Math.floor(Math.random() * backgrounds.length)
    

    return (
        <div>
            <button id="counterbut" 
            style={{backgroundColor: backgrounds[currentBackground], height:'50px', width:'100px'}} 
            onClick={() => setNumber(number+1)}>
                {number} likes
            </button>
        </div>
    )
}

export default LikeButton
