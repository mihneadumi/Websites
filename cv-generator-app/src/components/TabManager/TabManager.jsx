import About from "../About/About";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Preview from "../Preview/Preview";


function TabManager({ pageName, aboutInfo, setAboutInfo, educationInfo, setEducationInfo, handleAddEducationSegment, experienceInfo, setExperienceInfo, handleAddExperienceSegment }) {
    if (pageName === "About You") {
        return <About aboutInfo={aboutInfo} setAboutInfo={setAboutInfo}/>
    }
    else if (pageName === "Education") {
        return <Education
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            handleAddSegment={handleAddEducationSegment}
            />
    }
    else if (pageName === "Experience") {
        return <Experience
            experienceInfo={experienceInfo}
            setExperienceInfo={setExperienceInfo}
            handleAddSegment={handleAddExperienceSegment}
            />
    }
    else if (pageName === "Preview"){
        return (
            <Preview aboutInfo={aboutInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
        )
    }
} 

export default TabManager;