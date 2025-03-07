import { useContext, useState } from "react";
import Preview from "../components/Preview";
import SideBar from "../components/SideBar"
import "./Dashboard.css"
import AboutYourself from "./AboutYourself";
import ProfileBio from "../components/ProfileBio";
import Add_links_shop from "../components/Add_links_shop";
import Banner from "../components/Banner";
import { useUser } from "../Context/UserContext";
import Settings from "../components/Settings";
import Appearance from "../components/Appearance";
// modal application pics

import instagramIcon from "../assets/SocialMedia/skill-icons_instagram.png";
import facebookIcon from "../assets/SocialMedia/fa-brands_facebook-square.png";
import youtubeIcon from "../assets/SocialMedia/logos_youtube-icon.png";
import twitterIcon from "../assets/SocialMedia/prime_twitter.png";
import { ProfileDataContext } from "../Context/ProfileDataContext";

const Dashboard = () => {
    const { profileData, updateProfileData, saveProfile } = useContext(ProfileDataContext);
    const socialMediaApps = [
        { name: "Instagram", img: instagramIcon },
        { name: "FaceBook", img: facebookIcon },
        { name: "YouTube", img: youtubeIcon },
        { name: "X", img: twitterIcon },
    ];

    const [selectedApp, setSelectedApp] = useState(null);

    const handleSelect = (app) => {
        setSelectedApp(app); // Store selected app in state
         console.log(selectedApp);
    };

    const [showModal, setShowModal] = useState(false);

    console.log("modal value :", showModal)
    const [formData, setFormData] = useState({ title: "", url: "", application: "", toggle: false });

    const { user } = useUser();

    const [selectedSection, setSelectedSection] = useState("Links");

    console.log(user);

    // const user = JSON.parse(localStorage.getItem("user"));

    // from here w started

    return (
        <div className="dashboard-container">
            <SideBar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />

            <div className="container_content">
                <div className="welcome-header">
                    <h2>Hi, {user.firstname} {user.lastname}!</h2>
                    <h5>Congratulations . You got a great response today .</h5>


                </div>

                <div className="mid-container">

                    {selectedSection !== "Settings" && selectedSection !== "Analytics" && (
                        <div className="content-wrapper">

                            <Preview />

                        </div>

                    )}

                    {selectedSection == "Links" && (<div className="demo">
                        <ProfileBio />
                        <Add_links_shop showModal={showModal} setShowModal={setShowModal} />

                        <Banner />

                    </div>
                    )}


                    {selectedSection == "Appearance" && (
                        < Appearance />
                    )}


                </div>

                {/* stop it man  */}
                {/* <AboutYourself /> */}
                {selectedSection == "Settings" && (
                    < Settings />
                )}





            </div>

            {/* closeModal={() => setIsModalOpen(false)} */}

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className='btn-group'>
                            <button className='add btn-link active'>
                                Add Link
                            </button>
                            <button className='add btn-shop'>
                                Add Shop
                            </button>
                        </div>
                        <div className="modal ShadowModal">
                            <h3 className="labelurl">Enter URL</h3>
                            <input type="text" placeholder="Title" className="modal-input" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />

                            <input type="text" placeholder="URL" className="modal-input" value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} />
                            <button className="save-btn" onClick={null}>Save</button>

                            <h4 className="App-selection">Applications</h4>
                            <div className="card-container">
                                {socialMediaApps.map((app) => (
                                    <div className="card-box">
                                        <div
                                        key={app.name}
                                        className="card"
                                        onClick={() => handleSelect(app)}
                                    >
                                        <img src={app.img} alt={app.name} className="app-icon" />
                                        
                                    </div>
                                    <p>{app.name}</p>
                                    </div>
                                ))}
                                
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Dashboard
