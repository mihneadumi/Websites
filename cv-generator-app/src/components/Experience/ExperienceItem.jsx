import "./Experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function ExperienceItem({item, index, experienceInfo, setExperienceInfo}) {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        let newArr = [...experienceInfo];
        newArr[index][name] = value;
        setExperienceInfo(newArr);
    }

    const handleRemove = () => {
        console.log(experienceInfo);
        let newArr = [...experienceInfo];
        newArr.splice(index, 1);
        setExperienceInfo(newArr);
    }

    return(
        <div id="item-div">
            <input
                className="item"
                defaultValue={item.name}
                name="name"
                type="text"
                placeholder="Company Name"
                onChange={handleChange} 
            />
            <input
                className="item"
                defaultValue={item.role}
                name="role"
                type="text"
                placeholder="Role"
                onChange={handleChange} 
            />
            <input
                className="item"
                defaultValue={item.from}
                name="from"
                type="text"
                placeholder="Start date"
                onChange={handleChange} 
            />
            <input
                className="item"
                defaultValue={item.to}
                name="to"
                type="text"
                placeholder="End Date"
                onChange={handleChange} 
            />
            <textarea 
                className="item" 
                defaultValue={item.details}
                name="details" 
                onChange={handleChange} 
                rows={3} 
                placeholder=" Job Description"
                />
            <div id="del-div" className="item">
                <FontAwesomeIcon id="del-button" icon={faXmark} onClick={handleRemove}/>
                Delete
            </div>
        </div>
    )
}

export default ExperienceItem