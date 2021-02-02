import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage =({ id }) => {
    const [user, setUser] = useState(null);

    // A function responsible for sending request to the server
    const getUser = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/user/get/${id}`);
                if (response.status === 200) {
                    setUser(response.data);
                }
        } catch (err) {
            console.log(err.response.data);
        }
    };
    useEffect(() => {
        
        getUser(id);
    }, []);
    if (!user) return <div className="ui active loader"></div>;
    return (
        <div class="ui centered card">
            <div class="image">
                <img alt="profile" src={`http://localhost:5000/user/image/${user._id}`
    } />
        </div>
        <div class="content">
            <h2 class="header">{user.name}</h2>
            <h2 class="header">{user.email}</h2>
        </div>
    </div>
    );
};

export default ProfilePage