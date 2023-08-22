import React, { useState } from "react";

export default function TextForm(props) {
  const upclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to uppercase successfully!", "Success");
  };

  const loclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to lowercase successfully!", "Success");
  };

  const clear = () => {
    settext("");
    props.showAlert("Text cleared successfully!", "Success");
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  const copy = () => {
    var copyText = document.getElementById("mytext");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied successfully!", "Success");
  };

  const removeExtraspaces = () => {
    let remove = text.split(/[ ]+/);
    settext(remove.join(" "));
    props.showAlert("Extraspaces has been removed successfully!", "Success");
  };

  const [text, settext] = useState("");
  return (
    <>
      <div
        className={`container rounded bg-${props.mode} text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading} </h1>
        <div
          className={`mb-3 bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            value={text}
            onChange={handleOnChange}
            id="mytext"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={upclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={loclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={copy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={removeExtraspaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`my-4 bg-${props.mode} text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2 className="my-4">Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in the above box to preview here"}
        </p>
      </div>
    </>
  );
}
