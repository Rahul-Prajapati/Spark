import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  }); // Store user data

  console.log("const ",user);

  // Load user data on mount (if stored in localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    console.log("useeffect ",user);
    
  }, []);

  // Function to fetch user from MongoDB
  const fetchUser = async (userId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/user/${userId}`);
      const data = await res.json();
      setUser(data);
      console.log("fetch ",user);
      localStorage.setItem("user", JSON.stringify(data)); // Save to localStorage
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Function to update user profile in MongoDB
  const updateUserProfile = async (updatedData) => {
    if (!user) return;


    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_API}/api/user/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      setUser((prevUser) => ({ ...prevUser, ...data })); // Update context state
      localStorage.setItem("user", JSON.stringify({ ...user, ...data })); // Save to localStorage
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook to use UserContext
export function useUser() {
  return useContext(UserContext);
}

// export {UserContext, UserProvider};
