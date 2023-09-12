import { createSlice } from "@reduxjs/toolkit";
import { UsersState } from "../../interfaces/UserInterfaces";


const initialState: UsersState = {
    list: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loadUsers: (state, action) => {
            const newUsers = action.payload;
            return {
                ...state,
                list: newUsers,
            }
        },
        editUser: (state, action) => {
            const newUser = action.payload;
            const newUsers = state.list.map((user) => {
                if(user.id === newUser.id){
                    return newUser;
                }
                else return user;
            })
            return {
                ...state,
                list: newUsers,
            }
        }
    }
})

export const { loadUsers, editUser } = usersSlice.actions

export default usersSlice.reducer