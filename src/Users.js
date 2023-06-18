import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Users(props){
    const [users, setUsers] = useState([])

    useEffect(() => {
         axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response) => {
                const result = response.data 
                console.log(result)
                setUsers(result)
             })
             .catch((err)=>{
                alert(err.message)
             })
    }, [])

    return (
        <div>
            <h1> Users List - {users.length} </h1>
            
            <ul>
                {users.map((ele) => {
                    return <li key={ele.id}>  <Link to={`/users/${ele.id}`}> {ele.name} </Link> </li>
                })}
            </ul>
            
        </div>
    )
}

export default Users