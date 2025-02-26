import React from "react";
import { useSelector } from "react-redux";
import "./DisplayUsers.css";

function DisplayUsers() {
    const users = useSelector((state) => state.users);

    return (
        <div className="display-container">
            
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayUsers;
