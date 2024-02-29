// components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo">
          <img
            src="https://www.testvalley.kr/logo/logo-new.svg"
            alt="Testvalley Logo"
          />
        </div>
      </div>
      <div className="menu-icon">☰</div>
      <div className="nav-links">
        <a href="#">카테고리</a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="🔍 구매할지 망설이고 있다면" />
        {/* <button>🔍</button> */}
      </div>
      <div className="icons">
      <img
            src="https://www.testvalley.kr/common/home-event.svg"
            alt="Arrow"
          />
        <a href="#">로그인 / 가입하기</a>
      </div>
    </nav>
  );
};

export default Navbar;
