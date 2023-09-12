
import { useParams } from "react-router-dom"
import { getUserById } from "../../../redux/actions"
import { useSelector } from "react-redux";
import { StyledEditUser } from "./EditUser.styled";
import { EditCard } from "../../../components/EditCard/EditCard";
import { isNumeric } from "../../../utils/functions";

export const EditUser = () => {

    const { id } = useParams();
    if (id === undefined || !isNumeric(id)) {

        return <h1>Error: Invalid user ID</h1>;
    }
    const parsedId =parseInt(id);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const user = useSelector(getUserById(parsedId));
    return (
        <StyledEditUser>
            <h1 id="title">EDITING USER: {(user.first_name || user.last_name) ? (user.first_name || "" + " " + user.last_name || "" ): "anonymous"}</h1>
            <EditCard user={user} />
        </StyledEditUser>
    )
}
