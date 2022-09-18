import React, {useState} from 'react'
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList]=useState([])
  const addUserHandler = (username, age) =>{
    setUsersList((prevList)=>{
      return [...prevList,{username, age, id: Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
