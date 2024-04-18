import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../context/themeSlice";
import img1 from "../../assets/light.svg";
import img2 from "../../assets/dark.svg";

function Navbar() {
  const users = useSelector((s) => s.users.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h2>Redux Toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{users.length}</sup>
      </NavLink>
      <button onClick={() => dispatch(toggleMode())} className="nav__btn">
        {theme ? <img src={img1} alt="light" /> : <img src={img2} alt="dark" />}
      </button>
    </div>
  );
}

export default Navbar;
