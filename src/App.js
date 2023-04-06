import "./App.css";
import Places from "./places/pages/Places";
import NavBar from "./shared/components/NavBar";
import Users from "./users/pages/Users";
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/pages" element={<Users />} />
        <Route path="/places/pages" element={<Places />} />
      </Routes>
    </>
  );
}

export default App;
