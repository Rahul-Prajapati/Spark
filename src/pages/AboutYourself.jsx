import SparkGroupLogo from '../assets/SparkGroupLogo.png'
import AuthFrame from '../assets/AuthFrame.png'
import { useEffect, useState } from 'react'
import './AboutYourself.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useUser } from '../Context/UserContext'

const AboutYourself = () =>{
    const { setUser , updateUserProfile } = useUser();
    // console.log("About ", user);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        selectedCategory: ""
    })

    useEffect(() => {
        const savedCategory = localStorage.getItem("selectedCategory");
        if (savedCategory) {
            setFormData((prevFormData) => ({ ...prevFormData, selectedCategory: savedCategory }));
        }


        const savedUsername = localStorage.getItem("username");
        if (username){
            setFormData((prevFormData) => ({ ...prevFormData, username: savedUsername }));
        }
    }, []);


const categories = [
    { name: "Business", emoji: "💼" },
    { name: "Creative", emoji: "🎨" },
    { name: "Education", emoji: "📚" },
    { name: "Entertainment", emoji: "🎵" },
    { name: "Fashion & Beauty", emoji: "💄" },
    { name: "Food & Beverage", emoji: "🍕" },
    { name: "Government & Politics", emoji: "🏛️" },
    { name: "Health & Wellness", emoji: "🍎" },
    { name: "Non-Profit", emoji: "💗" },
    { name: "Other", emoji: "💖" },
    { name: "Tech", emoji: "💻" },
    { name: "Travel & Tourism", emoji: "✈️" },
  ];

  

  const handleContinue = async () => {
    const { username, selectedCategory } = formData;
    const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user._id : null; 
console.log(userId);

    const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/user/about_yourself`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userId, username, selectedCategory }),
    });

    
    // const updatedData = { ...user, username, selectedCategory };
    // console.log(updatedData);
    // const data = await updateUserProfile(updatedData);
    // // updateUserProfile

    // console.log(data);
  
    const data = await response.json();
    console.log(data.user)
    if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log(user);
        setUser(data.user);
        toast.success("Username and category saved")
      navigate('/dashboard');
    }  
    else {
        toast.error("Something went wrong")
    }
  };


    const handleSubmit = (e) =>{
        e.preventDefault();
        handleContinue();



    }

    return (
        <div className="Auth-Container">

        <div className="Auth-left">
            <img className='sparkLogo' src={SparkGroupLogo} alt="logo" />

            <div className='about-section'>

                <h1 className='about-heading'>Tell us about yourself</h1>

                <p className='sub-heading'>For a personalized Spark experience</p>

                <div className='username-box'>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder='Tell us about yourself'
                        className='username-input'
                        value={formData.username}
                        onChange={(e) => {
                            localStorage.setItem("username", e.target.value),
                            setFormData({ ...formData, username: e.target.value })
                        }}
                        required
                    />

                </div>

                <div>

                <p className='select-option' >Select one category that best describes your Linktree:</p>

                <div className="categories">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-btn ${
                formData.selectedCategory === category.name ? "selected" : ""
            }`}
            onClick={() => {
                localStorage.setItem("selectedCategory", category.name),
                setFormData({ ...formData, selectedCategory: category.name })
                                
            }}
          >
            {category.emoji} {category.name}
          </button>
        ))}
      </div>


                <div>

                </div>

                </div>

                

                <button className='btn-continue' type='submit' onClick={handleSubmit} >
                    Continue
                </button>

                

            </div>

        </div>

        <div className="Auth-right">
            <img className='auth-frame' src={AuthFrame} alt="banner" />

        </div>
    </div>
    )

}

export default AboutYourself;