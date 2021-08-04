import React from 'react'
import Image from 'next/image'

const Torso = ({occupation}) => {

    return (
        <div>
           <Image width='420px' height='230px' objectFit="fit" src={`/icons/${occupation}.png`}/>
        </div>
    )
}

export default Torso;