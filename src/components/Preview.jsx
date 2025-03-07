import { useUser } from "../Context/UserContext";
import ShareProfile from "../assets/ShareProfileSvG.svg"
import "./Preview.css"
const Preview = () => {

    const { user } = useUser();

    return (
        <div className="Preview-container">
            <div className="banner-preview">

            <img className="shareprofilebtn" src={ShareProfile} alt="" />

            <div className="profile-details">
            

            
                <img className="previewProfileDP" src={user.profileImage} alt="" />

                <span className="username-style">@{user.username}</span>

            </div>  

                
            </div>

            <div className="preview-content">
            <div className='btn-group btnsbsoluteLink'>
                    <button className='add btn-link active'>
                        Add Link
                    </button>
                    <button className='add btn-shop'>
                        Add Shop
                    </button>
            </div>

                <div className="link-style">
                        <h5>H5</h5>
                        <h5>H5</h5>
                        <h5>H5</h5>
                        <h5>H5</h5>
                        <h5>H5</h5>
                        <h5>H5</h5>
                        <h5>H5</h5>
                        <h5>H5</h5>
                </div>

                <button className="btn-getConnected">
                    Get Connected
                </button>

                <h5>Spark</h5>

            </div>

        </div>
    )

}

export default Preview;