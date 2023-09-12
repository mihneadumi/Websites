import "./Preview.css"

function Preview({ aboutInfo, educationInfo, experienceInfo }) {
    return (
        <>
            <h3>About info:</h3>
            <p>
                Name: {aboutInfo.name} <br />
                Email: {aboutInfo.email} <br />
                Phone: {aboutInfo.phone} <br />
                Address: {aboutInfo.address ? aboutInfo.address : "not specified"} <br />
                Bio: {aboutInfo.bio}
             </p>
             <h3>Education info:</h3>
             {educationInfo.map((item, index) => {
                if(item.name !== ""){
                    return (
                        <p key={index}>
                            Name: {item.name} <br />
                            Type: {item.type} <br />
                            From: {item.from} <br />
                            To: {item.to} <br />
                            Details: {item.details} <br />
                        </p>
                    )
                }   
             })}
             <h3>Experience info:</h3>
             {experienceInfo.map((item, index) => {
                if(item.name !== ""){
                    return (
                        <p key={index}>
                            Name: {item.name} <br />
                            Role: {item.role} <br />
                            From: {item.from} <br />
                            To: {item.to} <br />
                            Details: {item.details} <br />
                        </p>
                    )
                }   
             })}
        </>
    )
}

export default Preview