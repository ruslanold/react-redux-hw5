import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Modal from "../modal/Modal";
import InstagramService from "../../services/InstagramService";

import "./Post.css";

function Post(props) {
  const {
    photos,
    user ,
  } = useSelector(({ photos, user }) => ({ photos, user }));

  const [state, set] = useState({
    postLikes: {
      edges: [],
      count: 0,
      isPostLike: false,
      page_info: {},
    },
    caption: {
      edges: []
    },
    comments: {
      count: 0,
      edges: [],
      page_info: {}
    },
    display_resources: []
  });

  useEffect(async () => {
    const {
      node: {
        display_resources,
        edge_media_to_caption: caption,
        edge_media_to_comment: comments,
      },
    } = photos.find(({ node }) => node.shortcode == props.match.params.id);

    let postLikes = await fetch(
      `/api/likes/${props.match.params.id}`
    ).then((res) => res.json());

    let isPostLike = postLikes.edges.some(({ node }) => node.username == user.username);
    postLikes = { ...postLikes, isPostLike: isPostLike };

    set({
      display_resources,
      caption,
      postLikes,
      comments
    });
  }, [props.match.params.id]);



  const closeModal = (e) => {
    if (e.target.className == "post") props.history.goBack();
  };

  const handlerFormComments = async (e) => {
    e.preventDefault()

    const client = new InstagramService();
    const { target: { commentText } } = e
    console.log(commentText.value);
    let { edges, count } = state.comments

    try {
      let result = await client.setPostComment(commentText.value, props.match.params.id);
      console.log(result, "setPostComment");
    } catch (error) {
      console.log(error);      
    }
  }
  
  const handlerLike = async (e) => {

    let {isPostLike, edges, count} = state.postLikes

    if (isPostLike) {
      let result = await fetch(
        `/api/likes/remove/${props.match.params.id}`
      ).then((res) => res.json());

      isPostLike = false;
      count--
      let index = edges.findIndex(({ node }) => node.username == user.username);
      edges.splice(index, 1);

    } else {

      let result = await fetch(
        `/api/likes/add/${props.match.params.id}`
        ).then((res) => res.json());
        console.log(result, "add");
        
      isPostLike = true;
      count++
      edges.push({ node:{
        followed_by_viewer: false,
        full_name: "",
        id: "40228572839",
        is_private: false,
        is_verified: false,
        profile_pic_url: "https://instagram.fiev8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/118145469_1142562139470698_3895130186066801806_n.jpg?_nc_ht=instagram.fiev8-2.fna.fbcdn.net&_nc_ohc=JKGbAH4iHDIAX-hOqWs&tp=1&oh=0a95a3cde1bcfeb70e906f809061d69c&oe=600D16FF",
        requested_by_viewer: false,
        username: user.username,
      }});
    }

    set({ ...state, postLikes: {...state.postLikes, isPostLike, edges, count}});

  }

  return (
    <Modal>
      {console.log(state.postLikes, "postLikes")}
      {console.log(state.caption, "caption")}
      {console.log(state.comments, "comments")}
      <div className="post" onClick={closeModal}>
        <div className="post_wrapp" role="dialog">
          <div className="post_wrapp_two" role="dialog">
            <article className="post_inner" role="presentation">
              <header className="post_header">
                <div className="post_header_author_img">
                  <div className="post_header_author_img_inner">
                    <canvas className="" height="42" width="42"></canvas>
                    <NavLink to="/">
                      <img
                        alt={`Фото профиля ${user.username}`}
                        className="_6q-tv"
                        draggable="false"
                        src="https://scontent-otp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118145469_1142562139470698_3895130186066801806_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&amp;_nc_ohc=JKGbAH4iHDIAX_pv8xV&amp;tp=1&amp;oh=931f7d60557e7e731c700d4049028e69&amp;oe=6009227F"
                      />
                    </NavLink>
                  </div>
                </div>

                <div className="post_header_author_username">
                  <div className="post_header_author_username_wrapp">
                    <div className="post_header_author_username_inner">
                      <span>
                        <NavLink to="/">{user.username}</NavLink>
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div></div>
                    <div className=""></div>
                  </div>
                </div>
              </header>

              <div className="post_header_btn_edit">
                <button className="post_header_btn_edit_inner" type="button">
                  <div className="">
                    <div className="post_header_btn_edit_wrapp-svg">
                      <svg
                        aria-label="Дополнительно"
                        className="_8-yf5 "
                        fill="#262626"
                        height="16"
                        viewBox="0 0 48 48"
                        width="16"
                      >
                        <circle cx="8" cy="24" r="4.5"></circle>
                        <circle cx="24" cy="24" r="4.5"></circle>
                        <circle cx="40" cy="24" r="4.5"></circle>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>

              <div className="post_photo">
                <div className="post_photo_inner">
                  <div className="post_photo_inner_two">
                    <div className="post_photo_wrapp">
                      <img
                        className=""
                        alt=""
                        sizes="600px"
                        src={state.display_resources.length && state.display_resources[0].src}
                      />
                    </div>
                    <div className=""></div>
                  </div>
                </div>
              </div>

              <div className="post_info">
                <section className="post_info_navigation">
                  <span className="post_info_navigation_item post_info_navigation_item-first">
                    <button className=" " type="button" onClick={handlerLike}>
                      <div className="">
                        <span className="">
                          {state.postLikes.isPostLike ? (
                            <svg
                              aria-label="Не нравится"
                              class="_8-yf5 "
                              fill="#ed4956"
                              height="24"
                              viewBox="0 0 48 48"
                              width="24"
                            >
                              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          ) : (
                            <svg
                              aria-label="Нравится"
                              className=""
                              fill="#262626"
                              height="24"
                              viewBox="0 0 48 48"
                              width="24"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          )}
                        </span>
                      </div>
                    </button>
                  </span>
                  <span className="post_info_navigation_item">
                    <button className=" " type="button">
                      <div className="">
                        <svg
                          aria-label="Комментировать"
                          className=""
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"></path>
                        </svg>
                      </div>
                    </button>
                  </span>
                  <button className="post_info_navigation_item " type="button">
                    <div className="">
                      <svg
                        aria-label="Поделиться публикацией"
                        className=""
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                      </svg>
                    </div>
                  </button>
                  <span className="post_info_navigation_item post_info_navigation_item-last">
                    <div>
                      <div aria-disabled="false">
                        <button type="button">
                          <div>
                            <svg
                              aria-label="Сохранить"
                              className=""
                              fill="#262626"
                              height="24"
                              viewBox="0 0 48 48"
                              width="24"
                            >
                              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </span>
                </section>

                <section className="post_info_likes">
                  {state.postLikes.edges.length > 1 ? (
                    <div className="post_info_likes_inner">
                      <div className="post_info_likes_author_img">
                        <button className="" type="button">
                          <div className="">
                            <div className="post_info_likes_author_img_wrapp">
                              <span className="_" role="link">
                                <img
                                  alt=""
                                  className=""
                                  data-testid="user-avatar"
                                  draggable="false"
                                  src={
                                    state.postLikes.edges[0].node
                                      .profile_pic_url
                                  }
                                />
                              </span>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="post_info_likes_author_username">
                        Нравится{" "}
                        <span className="">
                          <NavLink className="" title="" to="/">
                            {state.postLikes.edges[0].node.username}
                          </NavLink>
                        </span>
                        {" и "}
                        <button className="" type="button">
                          {"ещё "}
                          <span>{state.postLikes.count - 1}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="post_info_likes_inner">
                      <button class="" type="button">
                        {state.postLikes.count} отметка «Нравится»
                      </button>
                    </div>
                  )}
                </section>

                <div className="post_info_comments">
                  <ul className="post_info_comments_inner">
                    <div className="post_info_comments_wrapp">
                      {state.caption &&
                        state.caption.edges.map(({ node }) => {
                          return (
                            <li key={node} className="post_info_comments_item">
                              <div className="post_info_comments_item_inner">
                                <div className="post_info_comments__item_wrapp">
                                  <div className="post_info_comments_author_img">
                                    <div
                                      className="post_info_comments_author_img_inner"
                                      aria-disabled="true"
                                    >
                                      <canvas
                                        className=""
                                        height="42"
                                        width="42"
                                      ></canvas>
                                      <NavLink className="" to="/">
                                        <img
                                          alt=""
                                          className=""
                                          data-testid="user-avatar"
                                          draggable="false"
                                          src="https://instagram.fiev8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/118145469_1142562139470698_3895130186066801806_n.jpg?_nc_ht=instagram.fiev8-2.fna.fbcdn.net&amp;_nc_ohc=JKGbAH4iHDIAX-hOqWs&amp;tp=1&amp;oh=d6fc3c19449491ce3158118da53883e3&amp;oe=6009227F"
                                        />
                                      </NavLink>
                                    </div>
                                  </div>

                                  <div className="post_info_comments_author_content">
                                    <h2 className="">
                                      <div className="">
                                        <span className="">
                                          <NavLink className="" to="/">
                                            {user.username}
                                          </NavLink>
                                        </span>
                                      </div>
                                    </h2>
                                    <span className="">{node.text}</span>
                                    <div className="post_info_comments_author_content_date">
                                      <div className="">
                                        <time className="" title="">
                                          17 нед.
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}

                      {state.comments &&
                        state.comments.edges.map(({ node }) => {
                          let {
                            text,
                            created_at,
                            owner: { username: name, profile_pic_url },
                          } = node;
                          let date = new Date(created_at * 1000);
                          created_at =
                            date.getDate() +
                            "." +
                            (date.getMonth() + 1) +
                            "." +
                            date.getFullYear();
                          return (
                            <li key={node} className="post_info_comments_item">
                              <div className="post_info_comments_item_inner">
                                <div className="post_info_comments__item_wrapp">
                                  <div className="post_info_comments_author_img">
                                    <div
                                      className="post_info_comments_author_img_inner"
                                      aria-disabled="true"
                                    >
                                      <canvas
                                        className=""
                                        height="42"
                                        width="42"
                                      ></canvas>
                                      <NavLink className="" to="/">
                                        <img
                                          alt=""
                                          className=""
                                          data-testid="user-avatar"
                                          draggable="false"
                                          src={profile_pic_url}
                                        />
                                      </NavLink>
                                    </div>
                                  </div>

                                  <div className="post_info_comments_author_content">
                                    <h2 className="">
                                      <div className="">
                                        <span className="">
                                          <NavLink className="" to="/">
                                            {name}
                                          </NavLink>
                                        </span>
                                      </div>
                                    </h2>
                                    <span className="">{text}</span>
                                    <div className="post_info_comments_author_content_date">
                                      <div className="">
                                        <time className="" title="">
                                          {created_at}
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </div>
                  </ul>
                </div>

                <div className="post_info_date">
                  <NavLink className="" to="/">
                    <time className="" title="">
                      18 августа
                    </time>
                  </NavLink>
                </div>

                <section className="post_info_form">
                  <div className="post_info_form_inner">
                    <form className="" onSubmit={handlerFormComments}>
                      <textarea
                        aria-label="Добавьте комментарий..."
                        placeholder="Добавьте комментарий..."
                        className=""
                        name="commentText"
                      ></textarea>
                      <button disabled className="" disabled="" type="submit">
                        Опубликовать
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Post;
