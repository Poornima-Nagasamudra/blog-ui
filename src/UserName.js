import React, {useState, useEffect} from  'react'
import axios from 'axios'

function UserName(props){

    const[show, setShow] = useState({})
    const [posts, setPosts] = useState([])

    const {id} = props.match.params

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((response) =>{
              const result = response.data
              console.log(result)
              setShow(result)
          })
          .catch((err) => {
             alert(err.message)
          })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then((response) => {
              const result = response.data 
              console.log(result)
              setPosts(result)
          })
          .catch((err)=>{
             alert(err.message)
          })
    }, [])

    return(
        <div>
            <h1>User Name - {show.name} </h1>

            <ul>
                {posts.map((ele) => {
                    return <li key={ele.id}> {ele.title} </li>
                })}
            </ul>
           
        </div>
    )
}
export default UserName