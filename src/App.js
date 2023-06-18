import React from 'react'
import {Link, Route} from 'react-router-dom'
import Home from './Home';
import Users from './Users'
import Posts from './Posts'
import UserName from './UserName';

function App() {
  return (
    <div >
       <ul>
           <Link to="/"> Home </Link> |
           <Link to="/users"> Users </Link> |
           <Link to="/posts"> Posts </Link>
       </ul>

       <Route path="/" component={Home} exact={true} />
       <Route path="/users" component={Users} exact={true} />
       <Route path="/posts" component={Posts} exact={true} />

       <Route path="/users/:id" component={UserName}  />

    </div>
  );
}

export default App;
