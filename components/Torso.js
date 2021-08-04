import React from 'react'

const Torso = ({occupation}) => {

    return (
        <div>
           <img alt="torso" src={`icons/${occupation}.png`}/>
        </div>
    )
}

export default Torso;