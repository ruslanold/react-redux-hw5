export default class InstagramService{
  
  url = "/api"

  login(username, password) {
    return fetch(
      `${this.url}/login`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password}),
      }
    ).then(res => res.json())
  };

  getPhotos(username) {
    return fetch(
      `${this.url}/photos`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      }
    ).then(res => res.json())
  };

  setPostComment(commentText, shortcode) {
    
    return fetch(
      `${this.url}/photos/comments/add`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentText, shortcode }),
      }
    ).then(res => res.json())
  };
}