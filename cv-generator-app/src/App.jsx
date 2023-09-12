import { useState } from 'react';

import './App.css'
import SlideNav from './components/SlideNav/SlideNav'
import TabManager from './components/TabManager/TabManager';

function App() {

  const pageNames = ["About You", "Education", "Experience", "Preview"];
  const [step, setStep] = useState(0);

  function nextStep() {
    
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  const [aboutInfo, setAboutInfo] = useState(
    {
      name: "",
      email: "",
      phone: "",
      address: "",
      bio: ""
    } 
  ) 

  const [educationInfo, setEducationInfo] = useState ([])

  function handleAddEducationSegment() {
    const segment = {
      name: "",
      qualification: "",
      from: "",
      to: "",
      details: ""
    }
    let newArr = [...educationInfo]
    newArr.push(segment)
    setEducationInfo(newArr);
  }

  const [experienceInfo, setExperienceInfo] = useState ([])

  function handleAddExperienceSegment() {
    const segment = {
      name: "",
      role: "",
      from: "",
      to: "",
      details: ""
    }
    let newArr = [...experienceInfo]
    newArr.push(segment)
    setExperienceInfo(newArr);
  }

  return (
    <>
      <SlideNav pageName={pageNames[step]} nextStep={nextStep} previousStep={previousStep} />
      <TabManager
        pageName={pageNames[step]}
        aboutInfo={aboutInfo}
        setAboutInfo={setAboutInfo}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        handleAddEducationSegment={handleAddEducationSegment}
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
        handleAddExperienceSegment={handleAddExperienceSegment}
      />
    </>
  )
}



export default App
