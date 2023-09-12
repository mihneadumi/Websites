import { StyledUserContainer } from "./UserContainer.styled"
import { UserCard } from "../UserCard/UserCard";
import { UsersState } from "../../interfaces/UserInterfaces";

export const  UserContainer = ({ list }: UsersState) => {
    return (
        <StyledUserContainer>
            {list.map((user) => {
                return <UserCard key={user.id} user={user} />
            })}
        </StyledUserContainer>
    )
}
