import React from 'react'
import Image from 'next/image'

const Head = ({age, gender}) => {

    const getHead = () => {

        if(age < 40){
            if(gender === 'Male'){
                return <Image src="/icons/m-head.png" width='100%' height='100%'
                objectFit="fit"/>
            }
            else{
                return <Image src="/icons/f-head.png" width='100%' height='100%'
                objectFit="fit"/>
            }
        }
        else{
            if(gender === 'Male'){
                return <Image src="/icons/old-m-head.png" width='100%' height='100%'
                objectFit="fit"/>
            }
            else{
                return <Image src="/icons/old-f-head.png" width='100%' height='100%'
                objectFit="fit"/>
            }
        }
    }

    return (
        <div>
           {getHead()}
        </div>
    )
}

export default Head
