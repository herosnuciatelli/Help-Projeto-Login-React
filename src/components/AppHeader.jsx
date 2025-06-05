import Logo from "../images/logo.svg";
import "../components_css/AppHeader.css";
import { PopUp } from "./PopUp";
import React from "react";
export function AppHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header>
      <div id="logo">
        <a href="#home">
          <div>
            <img src={Logo} alt="logo" />
            <h1>Cronus</h1>
          </div>
        </a>
      </div>
      <nav>
        <ul>
          {["Home", "Contact", "About Us"].map((item) => {
            return (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
        <PopUp>
          <PopUp.Trigger setIsOpen={setIsOpen}>Login</PopUp.Trigger>
          <PopUp.Content isOpen={isOpen}>
            <div className="PopUpCont">
              <PopUp.Close setIsOpen={setIsOpen} />

              <h1>Login</h1>
              <h1>Ola Thiagao</h1>
              <form action="">
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="password" />
              </form>
            </div>
          </PopUp.Content>
        </PopUp>
      </nav>
    </header>
  );
}
