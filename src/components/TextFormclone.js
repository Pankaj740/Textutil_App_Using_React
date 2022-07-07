import React, { useState } from "react";
// import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text, setText] = useState("Enter your Text...");
  const [newtext, setnewtext] = useState("");
  const checkUpperCase = () => {
    // console.log("Button to UC clicked:");
    setnewtext(text.toUpperCase())
    console.log(newtext);
    // setText("You have clicked on the button");
  };
  const Onchange = (event) => {
    setText(event.target.value);
  };

  const changetonull = () => {
    if (text === "Enter your Text...") {
      setText("");
    }
    console.log("Text-Area Clicked:");
  };

  return (
    <div>
      <h2 className="my-4">{props.label}</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
            isrequired="true"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
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
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={checkUpperCase}
        >
          Submit
        </button>
      </form>
      <textarea
            name="textarea"
            id="textarea"
            cols="100"
            rows="5"
            className="form-control my-3"
            value={newtext}
            onChange={Onchange}
            // onClick={changetonull}
          ></textarea>
    </div>
  );
}

























import React, { useState } from "react";
// import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text, setText] = useState("Enter your Text...");
  const [newtext, setnewtext] = useState("");
  const touppercase = () => {
    if (text !== "Enter your Text...") {
      setnewtext(text.toUpperCase());
    } else {
      setnewtext("");
    }
  };
  const tolowercase = () => {
    if (text !== "Enter your Text...") {
      // setnewtext(text.toLowerCase());
      setnewtext(text.toLowerCase());
    } else {
      setnewtext("");
    }
  };

  const Onchange = (event) => {
    setText(event.target.value);
  };

  const changetonull = () => {
    if (text === "Enter your Text...") {
      setText("");
    }
  };

  const clearele = () => {
    setText("Enter your Text...");
    setnewtext("");
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
        ></textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-success" onClick={tolowercase}>
          Lower Case
        </button>
        <button
          type="submit"
          className="btn btn-warning mx-3"
          onClick={touppercase}
        >
          Upper Case
        </button>
        <button type="submit" className="btn btn-danger" onClick={clearele}>
          Clear
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
      ></textarea>
      <p className="my-3">
        Words: <b>{text.split(" ").length}</b> and Characters: <b>{text.length}</b><br />
        {text.split(" ").length * 0.008} minutes required
      </p>

    </div>
  );
}

