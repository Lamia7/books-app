import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <AddBooks></AddBooks>
      <Footer></Footer>
    </div>
  );
}

export default App;
