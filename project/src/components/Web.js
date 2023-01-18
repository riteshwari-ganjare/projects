import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Web = () => {
  const [post,setPost] =useState([])
  // const [id, setid] = useState(1)
  useEffect(()=>{
axios.get('https://fakestoreapi.com/products/')
.then(res=>{
  console.log(res);
  setPost(res.data)
})
.catch(err=>{
  console.log(err);
})
  },[])
  return (
    <>
    <table >
      <tr >
        <th >id</th>
        <th >title</th>
        <th>category</th>
        <th>price</th>
      </tr>
      {
        post.map(post=>{
          return(<>
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.category}</td>
            <td>{post.price}</td>
          </tr>
          </>)
        })
      }
    </table>
 

    </>
  );
};

export default Web;
