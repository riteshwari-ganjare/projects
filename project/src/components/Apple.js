import React, { useEffect, useState } from 'react'

const Apple = () => {
    const [count, setcount] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
           console.log(setcount(count+1))
        },2000)
    })
  return (
    <div>

    </div>
  )
}

export default Apple