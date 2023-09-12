import { User } from "../../redux/reducers/usersSlice";
import { StyledPagination } from "./Pagination.styled";

interface expected {
    users: User[],
    usersPerPage: number,
    paginate: CallableFunction,
}

 const Pagination = ({users, usersPerPage, paginate}: expected) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(users.length / usersPerPage); i++){
        pageNumbers.push(i); 
    }

    return (
        <StyledPagination>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </StyledPagination>
    )
 }
 
 export default Pagination