import "./Education.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function EducationItem({item, index, educationInfo, setEducationInfo}) {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        let newArr = [...educationInfo];
        newArr[index][name] = value;
        setEducationInfo(newArr);
    }

    const handleRemove = () => {
        let newArr = [...educationInfo];
        newArr.splice(index, 1);
        setEducationInfo(newArr);
    }

    return(
        <div id="item-div">
            <input
                className="item"
                defaultValue={item.name}
                name="name"
                type="text"
                placeholder="School/University Name"
                onChange={handleChange} 
            />
            <input
                className="item"
                defaultValue={item.qualification}
                name="type"
                type="text"
                placeholder="Type of degree"
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
                placeholder=" Other Details"
                />
            <div id="del-div" className="item">
                <FontAwesomeIcon id="del-button" icon={faXmark} onClick={handleRemove}/>
                Delete
            </div>
        </div>
    )
}

export default EducationItem