import React from "react";
import "./ComponentsStyle.module.css";
import Navbar from "./Navbar";
import Search from "./Search";
import ChatS from "./Chats";
import Chats from "./Chats";



const Sidebar = () => {
    return (
        <div className="sidebar">
            <Navbar />
            <Search />
            
        </div>

    )
}

export default Sidebar;