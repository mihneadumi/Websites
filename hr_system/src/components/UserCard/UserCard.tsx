import { StyledUserCard } from "./UserCard.styled"
import { User } from "../../interfaces/UserInterfaces";
import { Link } from "react-router-dom";

interface UserCardProps {
    user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
    const path = ""+user.id;
    return (
        <Link to={path}>
        <StyledUserCard>
            <span id="heading">
                <h1>{user.id}.{(user.first_name || "") + " " + (user.last_name || "") + " "}</h1>
                <p id="email">({user.email || "no email"})</p>
            </span>
            <div id="details">
                <span className="row">
                    <p>Date of birth: {user.date_of_birth || "not specified"}</p>
                    <p>Years of Experience: {user.years_of_experience || "0"} yrs</p>
                </span>
                <span className="row">
                    <p>Industry: {(user.industry==="n/a" || user.industry===null) ? "not specified" : user.industry}</p>
                    <p>Salary: ${user.salary || "0"}</p>
                </span>
            </div>
        </StyledUserCard>
        </Link>
    )
}
