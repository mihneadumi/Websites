import { useState } from "react"
import { UserProp } from "../../interfaces/UserInterfaces"
import { StyledEditCard } from "./EditCard.styled"
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { editUser } from "../../redux/reducers/usersSlice";

export const EditCard = ({ user }: UserProp) => {

    const [newUser, setNewUser] = useState(user);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log(newUser);
        const { name, value } = event.target;
        setNewUser(
            {
                ...newUser,
                [name]: value,
            }
        )
    }

    const saveData = () => {
        dispatch(editUser(newUser))
    }

    return (
        <StyledEditCard>
            <span>
                <label>Email</label>
                <input name="email" type="text" defaultValue={user.email || ""} placeholder="Enter Email" onChange={handleChange}></input>
            </span>
            <span>
                <label>Industry</label>
                <input name="industry" type="text" defaultValue={(user.industry==="n/a" || user.industry===null) ? "" : user.industry} placeholder="Enter Industry" onChange={handleChange}></input>
            </span>
            <span>
                <label>Salary ($)</label>
                <input name="salary" type="number" defaultValue={user.salary || "0"} placeholder="Enter Salary" onChange={handleChange}></input>
            </span>
            <span>
                <label>Years of Experience</label>
                <input name="years_of_experience" type="number" defaultValue={user.years_of_experience || "0"} placeholder="Enter YoE" onChange={handleChange}></input>
            </span>
            <Link to="/users">
                <h1 onClick={saveData}>Save</h1>
            </Link>
        </StyledEditCard>
    )
}
