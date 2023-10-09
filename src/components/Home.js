import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersView = () => {
    const [users, setUsers] = useState([]);

  
    useEffect(() => {
      //fetch all users 
      fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((data) => setUsers(data.data));
    }, []);

    return (
      <div className="users-view">
        <h1>Users View</h1>
        <div className="user-cards">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
              <div className="user-info">
                <p>{user.first_name} </p>
                <p>{user.email}</p>
                <br></br>
                <Link to={`/user/${user.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    };

export default UsersView;