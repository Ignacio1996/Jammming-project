var accessToken = '';
const clientId = 'e8cf12d7e1fe49d897dd8465ca8be552';
const redirectUri = 'http://localhost:3000/'


const Spotify = {

    getAccessToken() {
        console.log("Gets to auth...");
        if (accessToken) {
            return accessToken
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); //This clears the parameters, allowing us to grab a new access token when it expires
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },


    search(term) {
        var tracksArray;

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(res => res.json())
            .then(body => {
                //returning the body doesnt work
                return body.tracks.items.map(track => {
                    //this console log works for every track
                    console.log(track.name);

                    //This return is undefined, HERE IS MY PROBLEM
                    var x = {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.album.uri
                    }

                    return x;
                    
                })
            })
    },

    savePlaylist(playlistName, tracksArray){
        var token = accessToken;
        var headers = {
            'Authorizarion': `Bearer ${token}`
        }
        if (playlistName && tracksArray) {
            
        } else {
            return;
        }
    }

}

export default Spotify;