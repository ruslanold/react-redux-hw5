import React from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

import Posts from "../posts/Posts";

import "./Content.css";

class Content extends React.Component {
  render() {
    return (
      <section className="content">
        <div className="content_user_info">
          <div className="content_user_info_inner">
            <div className="content_user_info-img">
              <img src="https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s150x150/118145469_1142562139470698_3895130186066801806_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=yOuFvW4rJhYAX9qXZyF&tp=1&oh=fb6f33548ae9661312129356753fc73f&oe=6001397F" />
            </div>
            <div className="content_user_info-desc">
              <div className="content_user_info-desc-name">
                <h1>alfajavadut</h1>
                <div className="content_user_info-edit-name">
                  <NavLink to="#">Редактировать профиль</NavLink>
                </div>
                <div className="content_user_info-settings">
                  <svg
                    aria-label="Параметры"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                    ></path>
                  </svg>
                </div>
              </div>
              <ul className="content_user_info-subscribersList">
                <li>
                  <span>
                    <span className="content_user_info-subscribersList-count">
                      10
                    </span>{" "}
                    публикаций
                  </span>
                </li>
                <li>
                  <span>
                    <span className="content_user_info-subscribersList-count">
                      10
                    </span>{" "}
                    подписчиков
                  </span>
                </li>
                <li>
                  <span>
                    <span className="content_user_info-subscribersList-count">
                      20
                    </span>{" "}
                    подписок
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content_nav">
          <NavLink exact to="/" >
            <span >
              <svg
                aria-label="Публикации"
                fill="#262626"
                height="12"
                viewBox="0 0 48 48"
                width="12"
              >
                <path
                  d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                ></path>
              </svg>
              <span className="content_nav_linl-name">Публикации</span>
            </span>
          </NavLink>
          <NavLink exact to="/channel">
            <span>
              <svg
                aria-label="Публикации"
                fill="#8e8e8e"
                height="12"
                viewBox="0 0 48 48"
                width="12"
              >
                <path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
              </svg>
              <span className="content_nav_linl-name">IGTV</span>
            </span>
          </NavLink>
          <NavLink exact to="/saved">
            <span>
              <svg
                aria-label="Сохраненное"
                fill="#8e8e8e"
                height="12"
                viewBox="0 0 48 48"
                width="12"
              >
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
              </svg>
              <span className="content_nav_linl-name">Сохраненное</span>
            </span>
          </NavLink>
          <NavLink exact to="/tagged">
            <span>
              <svg
                aria-label="Отметки"
                fill="#8e8e8e"
                height="12"
                viewBox="0 0 48 48"
                width="12"
              >
                <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
              </svg>
              <span className="content_nav_linl-name">Отметки</span>
            </span>
          </NavLink>
        </div>

        <Switch>
          <Route path="/" component={Posts} />
        </Switch>
        
      </section>
    );
  }
}

export default Content;
