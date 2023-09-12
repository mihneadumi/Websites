import { StyledAllUsers } from "./AllUsers.styled"
import Pagination from "../../../components/Pagination/Pagination"
import { UserContainer } from "../../../components/UserContainer/UserContainer"
import { useState } from "react"
import { useSelector } from "react-redux"
import { getUsers } from "../../../redux/actions"

export const AllUsers = () => {

    const users = useSelector(getUsers);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(4);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (number: number) => {
        setCurrentPage(number);
    }

    return (
        <StyledAllUsers>
            <h1 id="title">MANAGE USERS</h1>
            <UserContainer list={currentUsers}/>
            <Pagination 
            usersPerPage={usersPerPage} 
            users={users} 
            paginate={paginate}
            />  
        </StyledAllUsers>
    )
}
