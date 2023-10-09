import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserInfoView = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
        // Fetch user data from the API based on the user ID in the URL
        fetch(`https://reqres.in/api/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data.data));
    }, [id]);
  
    return (
        <div className="user-info-view">
            
            <h1>User Profile</h1>
            {user && (
                <div className="user-info">
                  
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                    <p>First Name:  {user.first_name} </p>
                    <p>Last Name:   {user.last_name}</p>
                    <p>Email:       {user.email}</p>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
            )}
        </div>
    );
};

export default UserInfoView;