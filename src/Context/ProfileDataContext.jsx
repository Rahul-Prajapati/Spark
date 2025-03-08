import { createContext, useState, useEffect } from "react";
import toast from 'react-hot-toast'

export const ProfileDataContext = createContext();

const getStoredProfileData = () => {
    const storedData = localStorage.getItem("profileData");
    return storedData ? JSON.parse(storedData) : {
        profileImage: "",
        bio: "",
        shop: [],
        links: [],
        bgColor: "#ffffff",
    };
};

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(getStoredProfileData);

    const user = JSON.stringify(localStorage.getItem("user"));
    console.log("local Storage",user);

    const userId = user._id;

    // Load from localStorage
    // useEffect(() => {
    //     localStorage.setItem("profileData", JSON.stringify(profileData));
    // }, [profileData]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
    console.log("local Storage",user);

    const userId = user._id;

    console.log(userId)
        fetch(`${import.meta.env.VITE_SERVER_API}/api/user/profile/${userId}`)
            .then(res => res.json())
            .then(data => {
                setProfileData(data);
                localStorage.setItem("profileData", JSON.stringify(data)); // Store in localStorage
            })
            .catch(err => console.error("Error fetching profile data:", err));
    }, [userId]);

    // Function to update profile data dynamically
    // const updateProfileData = (key, value) => {
    //     setProfileData(prevData => ({ ...prevData, [key]: value }));

    // };

    const updateProfileData = (key, value) => {
        setProfileData(prevData => {
            const updatedData = { ...prevData, [key]: value };
    
            // Update localStorage immediately
            localStorage.setItem("profileData", JSON.stringify(updatedData));
    
            return updatedData;
        });
    };

    // Function to save profile data to backend
    const saveProfile = async (userId) => {
        try {
            
            console.log("inside SaveProfile")
            const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/user/profile/${userId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(profileData),
            });

            if (!response.ok) throw new Error("Failed to save data");

            console.log("Profile updated successfully");
            toast.success("Profile updated successfully")
        } catch (error) {
            console.error("Error saving profile:", error);
            toast.error("Something went wrong")
        }
    };

    return (
        <ProfileDataContext.Provider value={{ profileData, updateProfileData, saveProfile }}>
            {children}
        </ProfileDataContext.Provider>
    );
};
