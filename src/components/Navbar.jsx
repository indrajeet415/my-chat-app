import React from "react";

const Navbar = () => {
  return (
    
    <div className="navbar">
      <div className="navbarWrapper">
        <span className="logo">My chat</span>
        <div className="user">
          <img
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            alt=""
          />
          <span>John</span>
          <button>logout</button>
        </div>
      </div>

      
    </div>


  );
};

export default Navbar;
