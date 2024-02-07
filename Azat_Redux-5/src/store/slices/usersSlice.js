
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action) => {
            const newUser = {
                id: state.users.length + 1,
                name: action.payload
            };
            state.users = [...state.users, newUser];
        },
        clearInput: (state) => {
            state.inputValue = ''
        },
        deleteAllUsers: (state) => {
            state.users = []
        }
    }
});

export const { changeInput, addUser, clearInput, deleteAllUsers } = usersSlice.actions;

export default usersSlice.reducer;
