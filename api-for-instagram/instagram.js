const Instagram = require("instagram-web-api");
const FileCookieStore = require("tough-cookie-filestore2");
const fetch = require("node-fetch");

class InstagramCli {
  constructor(username, password) {
    this.cookieStore = new FileCookieStore(`./sessions/${username}.json`);
    if (Object.keys(this.cookieStore.idx).length) password = null;
    this.client = new Instagram({
      username,
      password,
      cookieStore: this.cookieStore,
    });
  }

  login() {
    return this.client.login();
  }

  getProfile() {
    return this.client.getProfile();
  }
  async getPhotosByUsername(username) {
    let {
      user: {
        edge_owner_to_timeline_media: { edges },
      },
    } = await this.client.getPhotosByUsername({ username });
    return edges;
  }
  async setLike(shortcode) {
    let { id: mediaId } = await this.client.getMediaByShortcode({ shortcode });
    let res = await this.client.like({ mediaId });
    console.log(res);
    return res;
  }

  async unLike(shortcode) {
    let { id: mediaId } = await this.client.getMediaByShortcode({ shortcode });
    let res = await this.client.unlike({ mediaId });
    return res;
  }

  async setLikeMany(username, count) {
    let {
      user: {
        edge_owner_to_timeline_media: { edges },
      },
    } = await this.client.getPhotosByUsername({ username, first: count });

    for (let index = 0; index < edges.length; index++) {
      const mediaId = edges[index].node.id;
      await this.client.like({ mediaId });
    }
  }

  async getMediaLikes(shortcode) {
    let res = await this.client.getMediaLikes({
      shortcode,
      first: "10",
      after: "",
    });
    return res;
  }

  async setPost(urlImage, comment) {
    let res = await this.client.uploadPhoto({
      photo: urlImage,
      caption: comment,
      post: "feed",
    });
    return res;
  }

  async setPostComment(text, shortcode) {
    console.log(text, shortcode);
    let media = await this.client.getMediaByShortcode({ shortcode });
    let { id: mediaId } = media;

    try {
      const res = await this.client.commentToMediaByShortCode({
        mediaId,
        text,
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }

  async follow(username) {
    const { id } = await this.client.getUserByUsername({ username });
    let res = await this.client.follow({ userId: id });
    return res;
  }
  async deletePost(url) {
    let mediaId = await this.getMediaId(url);
    let res = await this.client.deleteMedia({ mediaId });
    return res;
  }
}

module.exports = InstagramCli;
