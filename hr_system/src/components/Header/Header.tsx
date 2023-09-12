import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { StyledHeader } from "./Header.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <span className="title">
                    <FontAwesomeIcon icon={faUsers} size="2x" />
                    <h2>YourHR</h2>
                </span>
            </Link>
            <span className="buttons">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/users">
                    <h1>Users</h1>
                </Link>
                <Link to="/stats">
                    <h1>Statistics</h1>
                </Link> 
            </span>
        </StyledHeader>
    )
}
