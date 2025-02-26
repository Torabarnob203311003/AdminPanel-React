import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./DisplayUsers.css";

function DisplayUsers() {
    const users = useSelector((state) => state.users);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleClick = (user) => {
        setSelectedUser(user); // Set the clicked user
    };

    return (
        <div className="display-container2">
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className={`unique-li ${selectedUser === user ? "active-user" : ""}`}
                        onClick={() => handleClick(user)} // Handle click event
                    >
                        <p className="unique-text text-gray-500">
                            {user} {/* Assuming the user object has a 'name' field */}
                        </p>
                    </li>
                ))}
            </ul>

          
        </div>
    );
}

export default DisplayUsers;
