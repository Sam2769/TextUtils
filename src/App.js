import "./App.css";
import NavBar from "./components/NavBar";
// import About from "./components/About";
import Form from "./components/Form";
import Alert from "./components/Alert";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

/* COMMENT ADDED ****************************  */

/* I love to use React JS to make the frontend part of my projects */

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Light");
      document.body.style.backgroundColor = "rgb(16, 15, 32)";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      setModeText("Dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };

  const enableGreenMode = () => {
    setMode("success");
    document.body.style.backgroundColor = "rgb(5, 33, 5)";
    showAlert("Green Mode has been Enabled", "success");
    // HAVE TO CHANGE TEXT TO wHITE
  };

  const enableMaroonMode = () => {
    setMode("danger");
    document.body.style.backgroundColor = "maroon";
    showAlert("Maroon Mode has been Enabled", "success");
  };

  const enableGreyMode = () => {
    setMode("secondary");
    document.body.style.backgroundColor = "grey";
    showAlert("Grey Mode has been Enabled", "success");
  };

  return (
    <>
      {/*<Router>*/}
      <NavBar
        title="Text Utils"
        modeText={modeText}
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        green={enableGreenMode}
        maroon={enableMaroonMode}
        grey={enableGreyMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route
              exact
              path="/"
              element={ */}
        <Form heading="Enter the Text" mode={mode} showAlert={showAlert} />
        {/* }
            />

            <Route path="/about" element={<About />} />
          </Routes> */}

        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
