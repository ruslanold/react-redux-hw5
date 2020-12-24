const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const InstagramCli = require("./instagram")
      
app.use(bodyParser.json());
      
let client = new InstagramCli();


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  client = new InstagramCli(username, password);
  try {
    await client.login();
    const profile = await client.getProfile();
    return res.json(profile);
  } catch (error) {
    console.log(error.message);
    return res.json({success: false });
  }
});

app.get('/api/logout', (req, res) => {

});

app.post('/api/photos/comments/add', async (req, res) => {
  const { commentText, shortcode } = req.body;
  console.log(commentText, shortcode);
  try {
    const result = await client.setPostComment(commentText, shortcode);
    console.log(result);
    return res.json(result);
  } catch (error) {
    return res.json({success: false });
  }
});
app.post('/api/photos', async (req, res) => {
  const { username } = req.body;

  try {
    const data = await client.getPhotosByUsername(username)
    return res.json(data);
  } catch (error) {
    console.log(error.message);
    return res.json({success: false });
  }
  
});
app.get('/api/likes/add/:shortcode', async (req, res) => {
  const { shortcode } = req.params;
  try {
    const like = await client.setLike(shortcode);
    console.log(like);
    return res.json(like);
  } catch (error) {
    return res.json({success: false });
  }
});

app.get('/api/likes/remove/:shortcode', async (req, res) => {
  const { shortcode } = req.params;
  try {
    const like = await client.unLike(shortcode);
    console.log(like);
    return res.json(like);
  } catch (error) {
    return res.json({success: false });
  }
});
app.get('/api/likes/:shortcode', async (req, res) => {
  const { shortcode } = req.params;
  try {
    const likes = await client.getMediaLikes(shortcode);
    console.log(likes);
    return res.json(likes);
  } catch (error) {
    return res.json({success: false });
  }
});


app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});