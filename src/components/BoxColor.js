import React from 'react'

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props) {
    const {r, g, b} = props
    const some = `rgb(${r}, ${g}, ${b})`

    return (
        <div style={{backgroundColor: some, height: '100px'}}>
            <p>{some}</p>
            <p>{rgbToHex(r, g, b)} </p>          
        </div>
    )
}

export default BoxColor
