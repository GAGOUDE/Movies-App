import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const count = useSelector((state) => state.favoris.counter);

  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/favoris"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li style={{ position: "relative" }}>Favoris
              <span
                style={{
                  width: "38px", height: "38px", borderRadius: "50%", position: "absolute", top: '0', left: "90%", padding: "0",
                  display: "flex", justifyContent: "center", alignItems: "center", fontSize: "35px", border: "0px solid white", marginLeft: "5px", lineHeight: "35", backgroundColor: "red"
                }} >
                {count}
              </span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header