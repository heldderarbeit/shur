# Shur
Url shortener

## Create a new short URL

`https://shur.herokuapp.com/new/https://www.twitch.tv`

If you want to pass a site that doesn't exist (or an invalid url) for some reason:
`https://shur.herokuapp.com/new/invalid?allow=true`

### Output

`{ "original_url": "https://www.twitch.tv", "short_url": "https://shur.herokuapp.com/5p_S" }`

Now `https://shur-heldderarbeit.c9users.io/5p_S` redirects to `https://www.twitch.tv`.
