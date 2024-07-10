import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Form from "./components/Form";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

  const toggleMaroonMode = () => {
    // light to maroon
    if (mode === "light") {
      setMode("danger");
      document.body.style.backgroundColor = "#5c1c22";
      showAlert("Maroon Mode has been Enabled", "success");
    } /* maroon to light */ else if (modeText === "Dark" && mode === "danger") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    } /*maroon to dark*/ else if (modeText === "Light" && mode === "danger") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(16, 15, 32)";
      showAlert("Dark Mode has been Enabled", "success");
    }
    // dark to maroon
    else {
      setMode("danger");
      document.body.style.backgroundcolor = "rgb(143,62,62)";
      showAlert("Maroon Mode has been Enabled", "success");
    }
  };

  const toggleGreenMode = () => {
    // light to green
    if (mode === "light" || mode === "dark") {
      setMode("success");
      document.body.style.backgroundColor = "green";
      showAlert("Green Mode has been Enabled", "success");
    }

    // green to light
    else if (modeText === "Dark" && mode === "success") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
    // green to dark
    else if (modeText === "Light" && mode === "success") {
      setMode("dark");
      document.body.style.backgroundColor = "";
      showAlert("Dark Mode has been Enabled", "success");
    }
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

  // const enableGreenMode = () => {
  //   setMode("success");
  //   document.body.style.backgroundColor = "rgb(5, 33, 5)";
  //   showAlert("Green Mode has been Enabled", "success");
  //   // HAVE TO CHANGE TEXT TO wHITE
  // };

  // const enableMaroonMode = () => {
  //   setMode("danger");
  //   document.body.style.backgroundColor = "maroon";
  //   showAlert("Maroon Mode has been Enabled", "success");
  // };

  // const enableGreyMode = () => {
  //   setMode("secondary");
  //   document.body.style.backgroundColor = "grey";
  //   showAlert("Grey Mode has been Enabled", "success");
  // };

  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          modeText={modeText}
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          toggleGreenMode={toggleGreenMode}
          toggleMaroonMode={toggleMaroonMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Form
                  heading="Try TextUtils - Word Counter , Character Counter, Case Converter"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
