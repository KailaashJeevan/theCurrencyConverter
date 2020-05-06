import React from 'react'

function header(){
    return(
        <div style={sty}>
            <h1>The Currency Converter</h1>
        </div>
    )
}

const sty={
    background:"#000",
    color:"#FFF",
    padding:"10px",
    textAlign:'center',

}

export default header