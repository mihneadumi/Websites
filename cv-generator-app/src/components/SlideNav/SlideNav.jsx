import "./SlideNav.css"
import "./TopBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'


function SlideNav({ pageName, nextStep=null, previousStep=null }) {
    // first page
    if(pageName.toLowerCase() === "about you"){
        return (
            <>
                <div id="top-bar">
                    <h2 id="top-title">CV Generator</h2>
                    <FontAwesomeIcon id="top-icon" icon={faFileLines} />
                </div>    
                <div id="nav-bar">
                    <FontAwesomeIcon id="nav-hidden" className="nav-button" icon={faArrowLeft}/>
                    <h3 id="nav-name">{pageName}</h3>
                    <FontAwesomeIcon id="nav-next" className="nav-button" icon={faArrowRight} onClick={nextStep}/>
                </div>
            </>
        )
    }
    // last page
    else if(pageName.toLowerCase() === "preview"){
        return(
            <>
                <div id="top-bar">
                    <h2 id="top-title">CV Generator</h2>
                    <FontAwesomeIcon id="top-icon" icon={faFileLines} />
                </div>     
                <div id="nav-bar">
                    <FontAwesomeIcon id="nav-prev" className="nav-button" icon={faArrowLeft} onClick={previousStep}/>
                    <h3 id="nav-name">{pageName}</h3>
                    <FontAwesomeIcon id="nav-hidden" className="nav-button" icon={faArrowLeft}/>
                </div>
            </>
        )
    }
    // middle page
    else {
        return (
            <>
                <div id="top-bar">
                    <h2 id="top-title">CV Generator</h2>
                    <FontAwesomeIcon id="top-icon" icon={faFileLines} />
                </div>
                <div id="nav-bar">
                    <FontAwesomeIcon id="nav-prev" className="nav-button" icon={faArrowLeft} onClick={previousStep}/>
                    <h3 id="nav-name">{pageName}</h3>
                    <FontAwesomeIcon id="nav-next" className="nav-button" icon={faArrowRight} onClick={nextStep} />
                </div>
            </>
        )
    }
}

export default SlideNav;