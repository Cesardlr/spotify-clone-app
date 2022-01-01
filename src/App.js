import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './DataLayer';
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify';


const spotify = new SpotifyWebApi()

function App() {
  // Dispatch is what we use to add a new value to the DataLayer
  const [{ user, token }, dispatch] = useDataLayerValue();
  // Here DataLayer.user and {user} are the same I'm just destructuring so Know I can use it as a variable, it's as if I'm using dataLayer.user


  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";

    // here I added _ so I don0t confuse with the token var in the useState
    const _token = hash.access_token;

    if (_token) {
      // Here I'm dispatching the token
      dispatch({
        type:"SET_TOKEN",
        token: _token
      })
      
      // We are giving the access token to the spotify web api
      spotify.setAccessToken(_token)

      // This will get the username - This will return a promise so I used then
      spotify.getMe().then((user) => {

        // I'm adding the user to the data layer
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }

  }, [])
  
  console.log('usr: ' + user)
  console.log('Tkn: ' + token)


  return (
    <div className="App">
      {/* I added a conditional so if I have the token I can show the player and if not I will get the logg in page */}
      {token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;
