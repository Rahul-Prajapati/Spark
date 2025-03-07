import React, { useContext, useState } from 'react'
import "./ProfileBio.css"
import { useUser } from '../Context/UserContext';
import { ProfileDataContext } from '../Context/ProfileDataContext';

function ProfileBio() {
    const { user } = useUser();
    const { profileData, updateProfileData } = useContext(ProfileDataContext);

    console.log(user);
    // const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // setImage(URL.createObjectURL(file));
      updateProfileData("profileImage",URL.createObjectURL(file))
    }
  };

  const handleRemoveImage = () => {
    // setImage(null); // Clear image
    updateProfileData("profileImage",null)
  };



  return (
    <div className='ProfileComponent' >
        <h4 className='profile-heading'>ProfileBio</h4>
        <div className='ProfileContainer'>
            <div className='uploadPicContainer'>

                <div className='imgDiv'>
                    {/* <img className='profileDp' src={user?.profileImage} alt="" /> */}
                    <img className='profileDp' src={profileData.profileImage} alt="" />
                </div>

                <div className='btn-box'>

                {/* <button className='btn-Imgselect'>
                    Pick an image
                </button> */}

<input type="file" accept="image/*" id="fileInput" onChange={handleImageChange} hidden />
      <label htmlFor="fileInput" className="btn-Imgselect upload-btn">Pick an image</label>

                
                <button className='btn-ImgRemove' onClick={handleRemoveImage} >
                    Remove
                </button>

                </div>
                

            </div>

            <div className='profile-info'>
                <div className='Title-section'>
                    <h6 className='label'>Profile Title</h6>
                    <span className='username'>@{user.username}</span>
                </div>

                <div className='bio-info'>
                    <h6 className='label'>Bio</h6>
                    <textarea className='bio-input' placeholder='Bio' onChange={(e) => updateProfileData("bio", e.target.value)} />
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default ProfileBio