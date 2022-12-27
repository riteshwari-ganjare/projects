import React, { useEffect, useState } from 'react'
import axios from 'axios'
const New = () => {
const [post, setpost] = useState([])
useEffect(() => {
 axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(res=>{
       setpost(res.data)
       })
       .catch(err=>console.log(err))
})

  return (
    <div>
        <table>
  {
    post.map(post=>{
        return(
          <div>

<th>
             <tr>{post.id}</tr>   
           
            </th>
              <td>
                <tr>
{post.title}
                </tr>
              </td>
          </div>
            
        )
    })
  }
  </table>
    </div>
  )
}

export default New