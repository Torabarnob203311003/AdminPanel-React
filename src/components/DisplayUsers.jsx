import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

function DisplayUsers() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.users);

    const deleteUser = (id) => {
        dispatch(removeUser(id)); // Correct dispatch call
    };

    return (
        <Wrapper>
            <ul>
                {data.map((user, id) => {
                    return (
                        <li key={id} className="user-item">
                            <p className="user-text">{user}</p>
                            <button className="btn-delete" onClick={() => deleteUser(id)} >  {/* Pass the id here */}
                                <MdDeleteForever className="delete-icon" />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  ul {
    list-style-type: none; /* Remove bullet points */
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
  }

  .user-item {
    display: flex;
    justify-content: space-between; /* Ensure space between user text and delete button */
    align-items: center;
    padding: 0.5rem 1rem; /* Add some padding around each item */
    font-size: 1.5rem;
    color: #333; /* Adjust text color */
    border-bottom: 1px solid #ddd; /* Add border between items */
  }

  .user-text {
    margin-right: auto; /* Push the user name to the left */
    color: #6b7280; /* Tailwind gray-500 color */
    font-size: 1.2rem; /* Customize the font size */
  }

  .btn-delete {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center; /* Vertically align the icon */
    justify-content: center; /* Center the icon inside the button */
    color: #f12711; /* Red color for delete icon */
    cursor: pointer; /* Make it clickable */
    font-size: 2rem; /* Icon size */
    margin-left: 10px; /* Add space between the text and button */
  }

  .delete-icon {
    font-size: 2.6rem; /* Adjust icon size */
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2)); /* Drop shadow effect */
  }

  /* Optional - If you want more spacing between list items */
  .user-item:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;


