import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useUser } from '../Context/UserContext';
import "./Settings.css"

function Settings() {

    const {user } = useUser();

    const userId  = user._id;

    const {firstname, lastname, email } = user;

   

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("storedUser"));
    if (storedUser) {
        console.log("storedUser is here");
    //   setFormData(storedUser);
    const { password, confirm_password, ...userWithoutPassword } = storedUser; 
    setFormData(userWithoutPassword);
    } 
    else if(user){
        const { password, confirm_password, ...userWithoutPassword } = user; 
        console.log(password);
        console.log(userWithoutPassword);
        const userId  = user._id;
        setFormData(userWithoutPassword);
        
        localStorage.setItem("storedUser", JSON.stringify(formData));
        console.log(formData);
    }
    else {
      fetchUserData();
    }
        
    },[])

    console.log(formData);

    const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/user/${userId}`);
          const userData = await response.json();

          console.log("fetch call: ");
      
          
          const { firstname, lastname, email } = userData;
      
          setFormData({
            firstname: firstname || "",
            lastname: lastname || "",
            email: email || "",
            password: "", 
            confirm_password: "", 
          });

          localStorage.setItem("storedUser", JSON.stringify(formData));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
    

    const handleChange = (e) => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
        const updatedFormData = { ...formData, [e.target.name]: e.target.value };
  setFormData(updatedFormData);
  localStorage.setItem("storedUser", JSON.stringify(updatedFormData));
    };

    const handleSave = async () => {
        const { firstname, lastname, email, password} = formData;
        const response = await fetch(`http://localhost:5000/api/user/profile_update/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstname, lastname, email, password }),
        });
        
        const data = await response.json();
        console.log(data);
        if (data) {
            toast.success("Profile updated successfully")
            localStorage.setItem("storedUser", JSON.stringify(formData));
        } else {
            toast.error("Something went wrong")
        }
      };


    return (
        <div className='Settings-wrapper'>

            <h5>Edit Profile</h5>

            <div className='credentials-box'>

                <label htmlFor="firstname">First name</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className='signup-input'
                    value={formData.firstname}
                    onChange={handleChange} 
                    required
                />




                <label htmlFor="lastname">Last name</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className='signup-input'
                    value={formData.lastname}
                    onChange={handleChange} 
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className='signup-input'
                    value={formData.email}
                    onChange={handleChange} 
                    required
                />


                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className='signup-input'
                    value={formData.password}
                    onChange={handleChange} 
                    required
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm_password"
                    className='signup-input'
                    value={formData.confirm_password}
                    onChange={handleChange} 
                    required
                />

            </div>

            <div className='save-Div'>
                <button className='btn-save' onClick={handleSave} style={{marginRight: "1.5rem"}} >Save</button>
            </div>


        </div>
    )
}

export default Settings