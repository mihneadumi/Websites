import "./Experience.css"
import ExperienceItem from "./ExperienceItem.jsx"

function Experience({ experienceInfo, setExperienceInfo, handleAddSegment}) {
    if(experienceInfo.length === 0){
        return (
            <>
                <div id="add-info" onClick={handleAddSegment}>Add Experience</div>
                <h3>No experience info available</h3>
            </>
        )
    }
    else{
        return (
            <>
                <div id="add-info" onClick={handleAddSegment}>Add Experience</div>
                <div id="experience-list">
                    {experienceInfo.map((item, index) => {
                        return <ExperienceItem 
                            item={item} 
                            key={index}
                            index={index}
                            experienceInfo={experienceInfo} 
                            setExperienceInfo={setExperienceInfo}
                            />
                    })}
                </div>
            </>

        )

    }
}

export default Experience