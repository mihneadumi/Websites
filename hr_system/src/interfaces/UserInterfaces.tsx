export interface User {
    id: number,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    date_of_birth: string | null,
    industry: string | null,
    salary: number | null,
    years_of_experience: number | null,
}

export interface UserProp {
    user: User;
}

export interface UsersState {
    list: User[];
}