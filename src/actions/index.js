// import * as firebase from 'firebase'
import firebase from 'react-native-firebase'

export const REQUEST_SONGS = 'REQUEST_SONGS'
export const RECEIVE_SONGS = 'RECEIVE_SONGS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidateSong() {
    return {
      type: INVALIDATE_SONG,
    }
  }
  
  function requestSongs() {
    return {
      type: REQUEST_SONGS,
    }
  }
  
  function receiveSongs(data) {
    return {
      type: RECEIVE_SONGS,
      songs: data,
      // songs: Object.values(data),
      receivedAt: Date.now()
    }
  }

  function getSongs() {
    return dispatch => {
      dispatch(requestSongs())
      // return firebase.firestore().collection('songList').get().then(querySnapshot => {
      return firebase.firestore().collection('songList').onSnapshot(querySnapshot => {
        const result = []
        querySnapshot.forEach(doc=>{
          result.push(doc.data().song)
        })
        dispatch(receiveSongs(result))
      })
      // return firebase.database().ref('songs').on('value', snapshot => {
      //   // const result = []
      //   // querySnapshot.forEach(doc=>{
      //   //   result.push(doc.data().song)
      //   // })
      //   dispatch(receiveSongs(snapshot.val()))
      // })
        // .then(snapshot => dispatch(receiveSongs(snapshot.val())))
    }
  }
  
  function shouldGetSongs(state) {
    if (state.songs.items.length == 0) {
      return true
    } else if (state.isFetching) {
      return false
    } else {
      return state.didInvalidate
    }
  }
  
  export function getSongsIfNeeded() {
    return (dispatch, getState) => {
      if (shouldGetSongs(getState())) {
        return dispatch(getSongs())
      }
    }
  }
