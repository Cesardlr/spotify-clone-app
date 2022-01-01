// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// Here we are sending the user to spotify so it can handle the authentication and then the user comes back to our app, this is the link of the button on the login page
export const authEndpoint = "https://accounts.spotify.com/authorize"

// After loggging in it'll take you back to our original url
const redirectUri = "http://localhost:3000/"
const clientId = "66155659df134708881d6536915131c2"

// The scopes are like the action that you are going to be able to use into your app using the spotify API
// You can see more here: https://developer.spotify.com/documentation/general/guides/authorization/scopes/
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]; 


export const getTokenFromUrl = ()=>{
    // This is going to find the position of the hashtag in the url and it just takes the redirect token from there
    // We want to chope a url like this one:
    // // #accessToken=mysupersecretkey&name=cesar

    // window.location.hash will locate the hash (#) symbol in the url
    return window.location.hash
        .substring(1)
        // Url after this: accessToken=mysupersecretkey&name=cesar

        .split('&')
        // Url after this: accessToken=mysupersecretkey     &name=cesar

        .reduce((initial, item) => {
            let parts = item.split('=')
            // Url after this: accessToken  mysupersecretkey

            // This will take the fist part that is accessToken and then take the second one and decode it with the js decodeURIComponent function to make an object that looks like this:
            // {access_token: 'mysupersecretkey'}
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
        
}


// We are creating the URL for the login button so the user can login into his sporify account
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

// Here in the scopes we use .join(%20) because %20 is the ASCII code for space