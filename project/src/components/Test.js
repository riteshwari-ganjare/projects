import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Test = () => {
    const [post,setPost] =useState([])
    const [id, setid] = useState(1)
    useEffect(()=>{
axios.get(`https://fakestoreapi.com/products/${id}`)
.then(res=>{
    console.log(res);
    setPost(res.data)
})
.catch(err=>{
    console.log(err);
})
    },[id])
  return (
    <div>
        <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
        <div>{post.title}</div>
       {/* <ol>
        {
            post.map(posts=>{
                return(
                    <li key={posts.id}>{posts.title}</li>
                )
            })
        }
        </ol>  */}
    </div>
  )
}

export default Test
