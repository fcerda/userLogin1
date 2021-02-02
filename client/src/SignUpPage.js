import React, { useState } from "react";
import axios from "axios";

// An input comment
const input = ({ type, label, onChange, value, placeholder }) => {
    return (
        <div className="field">
            <label>{label}</label>
            <input 
                type = { type }
                placeholder = {placeholder}
                value = {value}
                onChange = {onChange}
            />
        </div>   
    );
};

// Sign up Page
const SignUpPage = ({setId}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    // Form OnSubmit Method
    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password ) {
            setTimeout(() => setError("Please type name, email and password"), 10000);
        }
        signUp( name, email, password, file);
    };

    // A function responsible for sending request to server
    const signUp = async ( name, email, password, file) => {
        try {
            let data = new FormData();
            data.append("name", name);
            data.append("email", email);
            data.append("password", password);
            data.append("file", file);

            const response = await axios.post(
                "http://localhost:5000/user/new", data);
                console.log(response.status)
                    if(response.status === 200) {
                        const { id } = response.data;
                        setId( id )
                        // return history.push(`/profile/${id}`);
                    }
        } catch (err) {
            console.log(err)
        }
    };

    return(
        <div className="ui segment">
            <form className="ui form error" onSubmit={onSubmit}>
                <h4 className="ui dividing header"> Create your Profile</h4>
                <input
                type="text"
                label="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                />
                <input
                type="email"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                />
                <input
                type="password"
                label="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                />
                <input
                type="file"
                label="Image"
                onChange={(e) => {
                    setFile(e.target.files[0]);
                }}
                />
                {!error ? null :<div className="ui error message">{
                error}</div>}
                <button className="ui blue button" type="submit">
                    Sign up
                </button>

            </form>
        </div>
    );
};

export default SignUpPage