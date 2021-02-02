import React, { useState } from "react";
import SignUpPage from "./SignUpPage"
import logo from './logo.svg';
import './App.css';
import ProfilePage from "./ProfilePage";

function App() {
  const [id, setId] = useState()
  console.log(id)
  return id ? <ProfilePage id = {id} /> :(
    <SignUpPage setId = {setId}/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code>and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
