import { createSlice } from "@reduxjs/toolkit";


const userSlice =createSlice ({

    name : "user",
    initialState : [],
    reducers : {
        addUser(state, action) {
            state.push(action.payload);  // Correct way to access the payload
            console.log(action.payload);
        },

                    removeUser (state,action){},
                    deleteUsers (state,action){},


    },
});

export default userSlice ;
export const {addUser} = userSlice.actions;

// slices creat atcion auto/ and also action type