import { Header } from "../../components/Header/Header"
import { StyledStatistics } from "./Statistics.styled"
import { Outlet } from "react-router-dom"

export const Statistics = () => {

    return (
        <StyledStatistics>
            <Header />
            <div>
                <h1 id="title">STATISTICS</h1>
            </div>
            <Outlet />
        </StyledStatistics>
    )
}
