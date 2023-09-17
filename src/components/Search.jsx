import React from "react";
import "./ComponentsStyle.module.css"
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" />
      </div>
      <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="" />
        <div className="userChatInfo">
          <span>jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
