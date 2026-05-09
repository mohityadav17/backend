import express from "express"
const app = express()
const port = 3000
const github = {
  "login": "mohityadav17",
  "id": 198721290,
  "node_id": "U_kgDOC9g_Cg",
  "avatar_url": "https://avatars.githubusercontent.com/u/198721290?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mohityadav17",
  "html_url": "https://github.com/mohityadav17",
  "followers_url": "https://api.github.com/users/mohityadav17/followers",
  "following_url": "https://api.github.com/users/mohityadav17/following{/other_user}",
  "gists_url": "https://api.github.com/users/mohityadav17/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mohityadav17/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mohityadav17/subscriptions",
  "organizations_url": "https://api.github.com/users/mohityadav17/orgs",
  "repos_url": "https://api.github.com/users/mohityadav17/repos",
  "events_url": "https://api.github.com/users/mohityadav17/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mohityadav17/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-02-11T08:35:54Z",
  "updated_at": "2025-10-07T07:57:37Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('Mohittwitter.com')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login unsuccessful</h1>')
})
app.get('/github',(req,res)=>{
  res.json(github)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
