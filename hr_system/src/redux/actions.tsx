import { RootState } from "./store";

export const getUsers = (state: RootState) => state.users.list;

export const getUserById = (Id:number) => (state: RootState) => {
    return state.users.list.filter(({ id }) => Id===id)[0];
}