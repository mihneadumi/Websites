import { Header } from "../../components/Header/Header"
import { StyledUsers } from "./Users.styled"

import { Outlet } from "react-router-dom"


export const Users = () => {
    return (
        <StyledUsers>
            <Header />
            <Outlet />
        </StyledUsers>
    )
}
