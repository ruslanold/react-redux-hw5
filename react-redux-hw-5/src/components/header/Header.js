import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import logo from "../../logo.png";

function Header() {

  const auth = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();


  return (
    <header className="header">
      <div className="header_inner">
        <NavLink exact to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        <div className="header_search">
          <input placeholder="Поиск"/>
        </div>
        <div className="header_user_navigation">
          <ul>
            <li>
              <div className="header_inner_icon">
                <svg
                  aria-label="Главная страница"
                  fill="#262626"
                  height="26"
                  viewBox="0 0 48 48"
                  width="26"
                >
                  <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                </svg>
              </div>
            </li>
            <li>
              <div className="header_inner_icon">
                <svg
                  aria-label="Direct"
                  fill="#262626"
                  height="26"
                  viewBox="0 0 48 48"
                  width="26"
                >
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
              </div>
            </li>
            <li>
              <div className="header_inner_icon">
                <svg
                  aria-label="Найти людей"
                  fill="#262626"
                  height="26"
                  viewBox="0 0 48 48"
                  width="26"
                >
                  <path
                    d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                  ></path>
                </svg>
              </div>
            </li>
            <li>
              <div className="header_inner_icon">
                <svg
                  aria-label="Что нового"
                  fill="#262626"
                  height="26"
                  viewBox="0 0 48 48"
                  width="26"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              </div>
            </li>
            <li>
              <div className="header_user_photo header_inner_icon">
                <img
                  alt="Фото профиля"
                  src="https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s150x150/118145469_1142562139470698_3895130186066801806_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&amp;_nc_ohc=yOuFvW4rJhYAX9qXZyF&amp;tp=1&amp;oh=fb6f33548ae9661312129356753fc73f&amp;oe=6001397F"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
