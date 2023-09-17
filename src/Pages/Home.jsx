import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import "../components/ComponentsStyle.module.css";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <chat />
        
      </div>
    </div>
  );
};

export default Home;
