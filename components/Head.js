import React from 'react'

const Head = ({age, gender}) => {

    const getHead = () => {

        if(age < 40){
            if(gender === 'Male'){
                return <img src="icons/m-head.png" />
            }
            else{
                return <img src="icons/f-head.png" />
            }
        }
        else{
            if(gender === 'Male'){
                return <img src="icons/old-m-head.png" />
            }
            else{
                return <img src="icons/old-f-head.png" />
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
