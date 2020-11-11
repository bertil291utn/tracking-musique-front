# Spotify stats web app

### This is spotify stats musique tracking app. A mobile web app will let you know your monthly stats about your artists tracks. Because you're what you measure


[<div align="center"><img src="https://user-images.githubusercontent.com/24902525/98875879-19dd1b00-244b-11eb-9988-f0678c34ce45.gif" alt="image" width="400" /></div>](https://priceless-clarke-eb1698.netlify.app/)

*Click on the image to go to live demo*

Note: This is only a mobile web app 
## Video explanation
[📽🎬](https://www.loom.com/share/6e32d9765b094861acceb68a27a0ce2c)
## Built With 

- Node.js
- React
- Redux
- CSS
- ES6
- Spotify [API](https://developer.spotify.com/console/)
- My spotify stats [backend API](https://github.com/bertil291utn/tracking_musique_api/tree/feature/api)
- Spotify web [library](https://www.npmjs.com/package/spotify-web-api-js)

## Getting Started

In order to start with this project you need the next:
### Download repository
- Get a copy of this project [this repository :blue_book:](https://git.heroku.com/spotify-stats-front.git)
### Generate access tokens

**Spotify**

- Go to the developer Spotify API endpoint [page](https://developer.spotify.com/console/)
- Create an app you get
- Fill the form and submit this one
- At the end you will see two keys (CLIENT_ID and SECRET_ID)
- On this project create a `.env` file 
- Create a key name called `REACT_APP_CLIENT_ID` and `REACT_APP_CLIENT_SECRET`
- Copy your keys form the Spotify web page dashboard
- Paste on each variable respectively 

***Remember:** Spotify key has a limit time, however the app generates a token when the last is not invalid*

This project was developed with the [Spotify library](https://www.npmjs.com/package/spotify-web-api-js), go check it out this is the documentation 

### Run the project 

- Runs the app in the development mode.<br />
  ```
  npm start
  ```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Follow the video instructions 


## Deployment

Deployed with [Netlify](https://www.netlify.com/)  


## Authors

👤 **Bertil Tandayamo**

- Github: [@bertil291utn](https://github.com/bertil291utn)
- Twitter: [@btandayamo](https://twitter.com/batandayamo)
- LinkedIn: [Bertil Tandayamo](http://bit.ly/bertil_linkedin)

## Issues
- When you write a route manually pop up not found file with the live demo

## Improvements
- Fix routes (root, /artists, /results)
- Add profile section
- LogOut option 


## Acknowledgment

Inspired design by [Gregoire Vella](https://www.behance.net/gallery/13271423/Bodytrackit-An-iOs-app-Branding-UX-and-UI) and [Natan Jablonski](https://dribbble.com/shots/13993104-My-Music-Music-Player-App/attachments/5607401?mode=media)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

If you got until here, show your love hitting the ⭐️ button, I'd appreciate it.

**To crete a pull request:**
- Clone this project and create another branch
- Make the required changes 
- Send a pull request from the new branch  

## 📝 License

This project is [MIT](LICENSE) licensed.



