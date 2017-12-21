import { connect } from "react-redux";
import { getSongsIfNeeded } from "../actions";
import AllSongsScreen from "../components/AllSongsScreen";

const mapStatetoProps = state => ({
    songs: state.songs
})

const mapDispatchToProps = dispatch => ({
    // onSongClick: song => {
    //     dispatch(setCurrentSong(song))
    //     dispatch(changePlayState('play'))
    // },
    getSongsIfNeeded: () => {
        dispatch(getSongsIfNeeded())
    },

})

const VisibleAllSong = connect(
    mapStatetoProps,
    mapDispatchToProps
)(AllSongsScreen)

export default VisibleAllSong