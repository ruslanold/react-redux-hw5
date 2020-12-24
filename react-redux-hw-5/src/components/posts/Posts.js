import React from "react";
import { connect } from "react-redux";
import { NavLink, Route } from "react-router-dom";

import { getPhotos } from "../../actions";
import Post from "../post/Post";

import "./Posts.css";

class Posts extends React.Component {
  async componentDidMount() {
    const { getPhotosByUsername, user } = this.props;
    let data = await getPhotos(user.username);
    return getPhotosByUsername(data);
  }

  render() {
    console.log("render");
    return (
      <section className="posts">
        <div className="posts_items">
          {this.props.photos &&
            this.props.photos.map(({ node }, i) => {
              const {shortcode, thumbnail_src, edge_media_preview_like, edge_media_to_comment} = node
              return (
                <div key={i} className="posts_item">
                  <div>
                    <NavLink exact to={`/p/${shortcode}/`}>
                      <div className="posts_img">
                        <div>
                          <img alt="" src={thumbnail_src} />
                        </div>
                      </div>
                      <div className="posts_info">
                        <ul>
                          <li>
                            <span className="posts_info_icon posts_info_icon-like"></span>
                            <span>{ edge_media_preview_like.count }</span>
                          </li>
                          <li>
                            <span className="posts_info_icon posts_info_icon-comment"></span>
                            <span>{ edge_media_to_comment.count }</span>
                          </li>
                        </ul>
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
        </div>
        <Route path="/p/:id" component={Post} />
      </section>
      
    );
  }
}
const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotosByUsername: (data) => dispatch(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
