## Authorization workflow endpoints diagrams 

These are diagrams about how the application is authorizing to an user. They are not all endpoint using in this project, only the  authorization 

### Add a user
It's used to sign up component after create a user and returns a user id and a token 

<div align="center"><img src="https://user-images.githubusercontent.com/24902525/99154167-be45a400-267b-11eb-9c59-674ccdc76fd1.png" alt="image" width="600" /></div>


### Request a token
It's used for request ta new token when a user have log out the application. Use in Log In component 


<div align="center"><img src="https://user-images.githubusercontent.com/24902525/99154194-ef25d900-267b-11eb-839e-1a355c88dda6.png" alt="image" width="600" /></div>

### Get Spotify token
It's used to:

- Get in search component
- Get all user artists
- Get popular artist tracks 

**Note:** The application is getting a new token after each call to the endpoint 
<div align="center"><img src="https://user-images.githubusercontent.com/24902525/99154122-70c93700-267b-11eb-9927-bf4708adbcac.png" alt="image" width="600" /></div>

## Check valid token 

After the application is closed and we open again we have to check if the token on this application is still valid, because this token could be damaged or could have been expired (valid for only 24h) 

<div align="center"><img src="https://user-images.githubusercontent.com/24902525/99154182-cf8eb080-267b-11eb-8f88-d532f1ec6903.png" alt="image" width="600" /></div>