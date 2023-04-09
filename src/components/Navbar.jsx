import React, { Component } from "react";
import women from "../assets/imgs/women.jpg";
import hamburger from "../assets/svg/hamburger.svg";
import { Link } from "react-router-dom";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

var styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "10px",
  },

  title: {
    fontSize: "20px",
  },

  hamburger: {
    width: "30px",
    width: "30px",
  },

  profilePicture: {
    borderRadius: "100%",
    width: "45px",
    height: "45px",
  },
};

export default function Navbar(props) {
  return (
    <div style={styles.navbar}>
      <Link to="/menu">
        <img src={hamburger} style={styles.hamburger}></img>
      </Link>
      <h1 className="title" style={styles.title}>
        RECIPEFY
      </h1>

      {props.isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}
    </div>
  );
}
