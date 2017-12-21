import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_SONGS,
    RECEIVE_SONGS
  } from '../actions'

const songs = (state =
    {
        isFetching: false,
        didInvalidate: false,
        items: []
    }, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_SONGS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_SONGS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.songs,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

export default songs