
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput, clearInput, deleteAllUsers } from "../../store/slices/usersSlice";

function UsersPage() {
    const dispatch = useDispatch();
    const { inputValue, users } = useSelector(state => state.usersReducer);

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value));
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue));
    }

    const clearInputFunc = () => {
        dispatch(clearInput());
    }

    const deleteAllUsersFunc = () => {
        dispatch(deleteAllUsers());
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={changeInputFunc} />
            <button onClick={clearInputFunc}>Clear</button>
            <button onClick={deleteAllUsersFunc}>Delete All</button>
            <button onClick={addUserFunc}>Add User</button>

            {users.map(user => <h3 key={user.id}>{user.name}</h3>)}
        </div>
    )
}

export default UsersPage;
