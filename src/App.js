// import logo from "./logo.svg";
// import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [alt_msg, setmsg] = useState(null);

  const showalert = (message, type) => 
  {

    setmsg({ msg: message, type: type });
    setTimeout(() => {
      setmsg(null);
    }, 1000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark Mode has been enabled","success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled","success");
    }
  };

  return (
    <>
      {/* If the function has a props, and if u didnt passed on any prop as an argument, than defaultprops will come into section, if any value are set into it */}
      {/* <Navbar/> */}
      {/* if isrequired is return in proptype, then u must pass a argument, if its present in default one then its no issue. */}
      {/* <Navbar  about_us ="Pankaj Saha"/> */}
      <Navbar
        title="Duolingo"
        about_us="Agrowfarm-Website"
        mode={mode}
        togglestyle={togglemode}
      />

      <div
        className="container my-1"
        style={{
          backgroundColor: mode === "dark" ? "grey" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <Alert alert={alt_msg} />
        <TextForm
          label="Welcome To the universal Spanish Class"
          text_area_desc="Please enter your required string: "
          mode={mode}
          showalert = {showalert}
        />
      </div>
      <div
        className="container my-4"
        style={{
          backgroundColor: mode === "dark" ? "grey" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
