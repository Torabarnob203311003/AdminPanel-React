import { createSlice } from "@reduxjs/toolkit";


const userSlice =createSlice ({

    name : "user",
    initialState : [],
    reducers : {
        addUser(state, action) {
            state.push(action.payload);  // Correct way to access the payload
            console.log(action.payload);
        },

                    removeUser (state,action){

                       // state.pop(action.payload);
                             state.splice(action.payload,1)

                    },
                    deleteUsers (state,action){},


    },
});

export default userSlice ;
export const { addUser, removeUser } = userSlice.actions;

// slices creat atcion auto/ and also action type