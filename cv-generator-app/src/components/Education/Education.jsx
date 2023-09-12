import EducationItem from "./EducationItem"
import "./Education.css"


function Education({ educationInfo, setEducationInfo, handleAddSegment }) {
    if(educationInfo.length === 0){
        return (
            <>
                <div id="add-info" onClick={handleAddSegment}>Add Education</div>
                <h3>No education info available</h3>
            </>
        )
    }
    else {
        return (
            <>
                <div id="add-info" onClick={handleAddSegment}>Add Education</div>
                <div id="education-list">
                    {educationInfo.map((item, index) => {
                        return <EducationItem 
                            item={item} 
                            key={index}
                            index={index}
                            educationInfo={educationInfo} 
                            setEducationInfo={setEducationInfo}
                            />
                    })}
                </div>
            </>

        )
    }
}

export default Education