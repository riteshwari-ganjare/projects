import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [post, setpost] = useState([]);
useEffect(()=>{
   axios.get("https://fakestoreapi.com/products").then(res=>{
   
    setpost(res.data)
   }).catch(err=>{
    console.log(err)
   })
},[])

    
  return (
    <div>
    <ol>
        {
            post.map((posts)=>{
               return(
                
                 <li key={posts.id}>{posts.title}</li>
               )
            })
        }
    </ol>
    </div>
  )
}

export default Practice
