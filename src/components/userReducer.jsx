
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            // Filter out the user that matches the id in the payload
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            };
        default:
            return state;
    }
};

export default usersReducer;