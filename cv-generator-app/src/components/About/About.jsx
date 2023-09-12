import "./About.css"

function About({ aboutInfo, setAboutInfo }) {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAboutInfo({
            ...aboutInfo,
            [name]: value
        })
    }

    return (
        <div id="about-form">
            <div className="input-div">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    defaultValue={aboutInfo.name} 
                    onChange={handleChange}
                    placeholder="Full Name"
                    />
            </div>
            <div className="input-div">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    defaultValue={aboutInfo.email} 
                    onChange={handleChange}
                    placeholder="Contact Email"
                    />
            </div>
            <div className="input-div">
                <label htmlFor="phone">Phone</label>
                <input 
                    type="text" 
                    name="phone" 
                    defaultValue={aboutInfo.phone} 
                    onChange={handleChange}
                    placeholder="Your Number"
                    />
            </div>
            <div className="input-div">
                <label htmlFor="address">Address</label>
                <input 
                    type="text" 
                    name="address" 
                    defaultValue={aboutInfo.address} 
                    onChange={handleChange}
                    placeholder="Address (optional)"
                    />
            </div>
            <div className="input-div">
                <label htmlFor="Bio">Bio</label>
                <textarea 
                    name="bio" 
                    defaultValue={aboutInfo.bio} 
                    onChange={handleChange} 
                    rows={3} 
                    placeholder="Hobbies, funny things about you, maybe a weird fact, get creative!"/>
            </div>
        </div>
    )
}

export default About;