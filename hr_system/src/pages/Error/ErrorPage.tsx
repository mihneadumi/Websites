import { Header } from "../../components/Header/Header"
import { StyledErrorPage } from "./ErrorPage.styled"

export const ErrorPage = () => {
    return (
        <StyledErrorPage>
            <Header />
            <div>
                <img src="https://i.pinimg.com/1200x/73/23/52/7323528be5858d79f37bce9e1990afec.jpg" />
                <h1>Oh No!<br/></h1>
                <h1>You seem to have entered a wrong url, 
                    click on the top-left 
                    side logo or on the Home button to return home.</h1>
            </div>
        </StyledErrorPage>

    )
}
