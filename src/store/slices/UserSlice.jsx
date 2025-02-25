import { createSlice } from "@reduxjs/toolkit";


const users =createSlice ({

    name : "user",
    initialState : [],
    reducers : {
                    addUser (state, action){ },
                    removeUser (state,action){},
                    deleteUsers (state,action){},


    },
});

export default users;

// slices creat atcion auto/ and also action type