import { Link } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { StyledHome } from "./Home.styled"

export const Home = () => {
    return (
        <StyledHome>
            <Header />
            <div className="container">
                <Link to="/users">
                    <h1 className="main-button">Manage Users</h1>
                </Link>
                <Link to="/stats">
                    <h1 className="main-button">See some Stats</h1>
                </Link>
            </div>
        </StyledHome>

    )
}
