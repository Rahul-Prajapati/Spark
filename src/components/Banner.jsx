import { ProfileDataContext } from '../Context/ProfileDataContext';
import { useUser } from '../Context/UserContext';
import './Banner.css'
import React, { useContext, useState } from 'react'

function Banner() {
  const { user } = useUser();
  const { profileData, updateProfileData, saveProfile } = useContext(ProfileDataContext);

  const userId = user?._id;
  // const userId = user._id;

  const isValidHex = (hex) => /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
  // const [color, setColor] = useState("#000000");
  // const [error, setError] = useState("");

  const circles = [
    { id: 1, color: "#342B26" },
    { id: 2, color: "#258719" },
    { id: 3, color: "#000000" },
  ];

  const saveData = async () => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/user/update_profileData`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({userId ,profileImage, bio, shop, links, bgColor }),
    });

    if (response.ok) {
        alert("Profile saved successfully!");
    } else {
        alert("Error saving profile.");
    }
};

  const handleCircleClick = (color) => {
    // setColor(color);
    updateProfileData("bgColor", color)
    console.log("Selected Color:",profileData.bgColor);
  };

  // const handleChange = (e) => {
  //   const newColor = e.target.value;
  //   console.log(newColor);

  //   if (isValidHex(newColor)) {
  //     setColor(newColor);
  //     setError(""); // Clear error if valid
  //   } else {
  //     setError("Invalid HEX Code");
  //   }
  // };

  return (
    <div className='Banner-outer'>
      <div className='Banner-div'>
        <div className='Banner-bgcolor'>
          <img className='profileDemo' src="" alt="plo" />

          <span className='banner-username'>@{user.username}</span>
          <p className='Flame-username'>/{profileData.bio}</p>
        </div>

        <div className='bg-selection'>
          <h3 className='custom-heading'>Custom Background Color</h3>

          <div className='bg-options'>

            <div className='circle-container'>
              {circles.map((circle) => (
                <div style={{backgroundColor : `${circle.color}`}}
                  key={circle.id}
                  className={`circle ${profileData.bgColor === circle.color ? "selected" : ""}`}
                  onClick={() => handleCircleClick(circle.color)}
                ></div>
              ))}
            </div>



          </div>

          <div className='custom-bg-colors'>
            <div className='custom-container'>
              <div className="color-preview"
                style={{ backgroundColor: (profileData.bgColor) ? profileData.bgColor : "#ffffff" }}>

              </div>

              <div>
                <input
                  type="text"
                  value={profileData.bgColor}
                  onChange={(e) =>updateProfileData("bgColor", e.target.value)}
                  className="color-input"
                />
              </div>

              {/* {error && <p className="error-message">{error}</p>} */}
            </div>

          </div>


        </div>

      </div>

      <div className='save-Div'>
      <button className='btn-save' onClick={() => saveProfile(userId)}>Save</button>
      </div> 

    </div>
  )
}

export default Banner