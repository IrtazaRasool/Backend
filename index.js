const express = require('express')
require('dotenv').config();

const githubData ={
    "login": "IrtazaRasool",
    "id": 141081749,
    "node_id": "U_kgDOCGi8lQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/141081749?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/IrtazaRasool",
    "html_url": "https://github.com/IrtazaRasool",
    "followers_url": "https://api.github.com/users/IrtazaRasool/followers",
    "following_url": "https://api.github.com/users/IrtazaRasool/following{/other_user}",
    "gists_url": "https://api.github.com/users/IrtazaRasool/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/IrtazaRasool/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/IrtazaRasool/subscriptions",
    "organizations_url": "https://api.github.com/users/IrtazaRasool/orgs",
    "repos_url": "https://api.github.com/users/IrtazaRasool/repos",
    "events_url": "https://api.github.com/users/IrtazaRasool/events{/privacy}",
    "received_events_url": "https://api.github.com/users/IrtazaRasool/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Irtaza Rasool Khan",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-07-31T22:40:43Z",
    "updated_at": "2024-10-28T18:52:12Z"
  }

const app = express();


app.get('/', (req, res)=>{
    res.send("HEllo World!")
})


app.get('/github', (req, res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT,(req, res)=>{
    console.log(`Server is running on ${process.env.PORT}`);
    
})