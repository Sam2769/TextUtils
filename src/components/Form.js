import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState(" ");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const Clearwindow = () => {
    setText("");
    props.showAlert("Terminal has been cleared !", "success");
  };

  const handleInverse = () => {
    let newText = "";

    for (let f = 0; f < text.length; f++) {
      let character = text.charAt(f);

      if (character === character.toUpperCase()) {
        newText += character.toLowerCase();
      } else if (character === character.toLowerCase()) {
        newText += character.toUpperCase();
      } else {
        newText += character;
      }
    }

    setText(newText);
    props.showAlert("converted to InVeRsE CaSe !", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard !", "success");
  };
  // *************************************

  // GETTING word count and character count
  let wordCount = 0;
  let charCount = 0;
  let charArr = text.split("");
  let wordArr = text.split(" ");

  const get_word_count = (count, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== " " && arr[i] !== "") {
        count++;
      }
    }

    return count;
  };

  const getCharCount = (charCount, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "" && arr[i] !== " ") {
        charCount++;
      }
    }

    return charCount;
  };

  // ************************************************

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(54, 58, 73)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            value={text}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>

        <button
          id="Button1"
          className={`btn btn-primary mx-3 my-1`}
          onClick={handleUpperCase}
        >
          Convert To UpperCase
        </button>
        <button
          id="Button2"
          className="btn btn-primary mx-3 my-1"
          onClick={handleLowerCase}
        >
          Convert To LowerCase
        </button>

        <button
          id="Button3"
          className="btn btn-primary mx-3 my-1"
          onClick={Clearwindow}
        >
          Clear
        </button>

        <button
          id="Button4"
          className="btn btn-primary mx-3 my-1"
          onClick={handleInverse}
        >
          InVeRsE CaSe
        </button>

        <button
          id="Button5"
          className="btn btn-primary mx-3 my-1"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary:</h1>
        <p>
          words: {get_word_count(wordCount, wordArr)}
          <br />
          characters: {getCharCount(charCount, charArr)}
        </p>

        <h2>Preview</h2>
        <p>{text.length <= 1 ? "Enter something to preview Here" : text}</p>
      </div>
    </>
  );
}
