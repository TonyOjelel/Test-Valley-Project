// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">Testvalley</div>
            <div className="menu-icon">☰</div>
            <div className="nav-links">
                <a href="#">카테고리</a>
                <a href="#">로그인 / 가입하기</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="구매할지 망설이고 있다면" />
                <button>🔍</button>
            </div>
            <div className="icons">
                <span>50%</span>
                <span>📦</span>
            </div>
        </nav>
    );
};

export default Navbar;
