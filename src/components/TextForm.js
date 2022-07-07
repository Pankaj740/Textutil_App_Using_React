import React, { useState } from "react";
// import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text, setText] = useState("Enter your Text...");
  const [newtext, setnewtext] = useState("");
  const [text_len, settextlen] = useState(0);
  const [text_char, settextchar] = useState(0);

  const touppercase = () => {
    if (text !== "Enter your Text...") {
      setnewtext(text.toUpperCase());
      props.showalert("Converted to Upper-Case:", "success");
    } else {
      setnewtext("");
    }
  };
  const tolowercase = () => {
    if (text !== "Enter your Text...") {
      // setnewtext(text.toLowerCase());
      setnewtext(text.toLowerCase());
      props.showalert("Converted to Lower-case:", "success");
    } else {
      setnewtext("");
    }
  };

  const Onchange = (event) => {
    setText(event.target.value);
    settextchar(text.length);
    settextlen(text.split(" ").length);
  };
  //   if(text === ""){
  //     settextchar(0);
  //     settextlen(0);
  //   }
  // };

  const changetonull = () => {
    if (text === "Enter your Text...") {
      setText("");
      settextchar(0);
      settextlen(0);
    } else if (text === "") {
      setText("");
      settextchar(0);
      settextlen(0);
    }
  };

  const clearele = () => {
    setText("Enter your Text...");
    settextchar(0);
    settextlen(0);
    setnewtext("");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    if (text !== "Enter your Text...") {
      msg.text = text;
      props.showalert("Reading Your Text:", "success");
    } else {
      msg.text = "No comments detected:";
    }
    window.speechSynthesis.speak(msg);
  };

  const copytext = () => {
    let selected_text;
    if (text === "Enter your Text...") {
      selected_text = "";
    } else {
      selected_text = text;
      props.showalert("Text copied to Clip-Board:", "success");

    }
    navigator.clipboard.writeText(selected_text);
  };

  const rextraspace = () => {
    let newtext_temp = text.split(/[ ]+/);
    setText(newtext_temp.join(" "));
    props.showalert("Extra Space Removed", "success");

  };

  return (
    <div>
      <h2 className="my-4">{props.label}</h2>
      <div>
        <h5 className="my-4">{props.text_area_desc}</h5>
        <textarea
          name="textarea"
          id="textarea"
          cols="100"
          rows="8"
          className="form-control my-3"
          value={text}
          onChange={Onchange}
          onClick={changetonull}
          style={{
            backgroundColor: props.mode === "dark" ? "#434040ab" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-success" onClick={tolowercase}>
          Lower Case
        </button>
        <button
          type="submit"
          className="btn btn-warning mx-2"
          onClick={touppercase}
        >
          Upper Case
        </button>

        <button type="submit" onClick={speak} className="btn btn-primary">
          Speak
        </button>
        <button
          type="submit"
          className="btn btn-danger mx-2"
          onClick={clearele}
        >
          Clear
        </button>
        <button type="submit" className="btn btn-info " onClick={copytext}>
          Copy
        </button>
        <button
          type="submit"
          className="btn btn-info mx-2"
          onClick={rextraspace}
        >
          Remove Space
        </button>
      </div>

      <h4 className="my-3">Preview</h4>
      <textarea
        name="textarea"
        id="textarea"
        cols="100"
        rows="5"
        className="form-control my-3"
        value={newtext}
        // onChange={Onchange}
        // onClick={changetonull}
        style={{
          backgroundColor: props.mode === "dark" ? "#434040ab" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      ></textarea>
      <p className="my-3">
        {/* Words: <b>{text.split(" ").length}</b> and Characters: <b>{text.length}</b><br />
        {text.split(" ").length * 0.008} minutes required */}
        Words: <b>{text_len}</b> and Characters: <b>{text_char}</b>
        <br />
        {text_len * 0.008} minutes required
      </p>
    </div>
  );
}
