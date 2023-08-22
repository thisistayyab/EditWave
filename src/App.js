// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// let name = "Tayyab's";
function App() {
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
    // let newmode = "dark"
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been Enabled", "Success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "Success");
    }
  };

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="EditWave"
          About="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert Alert={alert} />
        <div className="container my-4">
          <TextForm
            showAlert={showAlert}
            mode={mode}
            toggleMode={toggleMode}
            heading="Enter text to below analyze:"
          />
        <About mode={mode} toggleMode={toggleMode} />
        </div>
        {/* <Routes>
          <Route
            path="/about"
            element={<About mode={mode} toggleMode={toggleMode} />}
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
