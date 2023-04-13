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
        <Route path="/users" element={<Users />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/:userId" element={<Places />} />
      </Routes>
    </>
  );
}

export default App;
