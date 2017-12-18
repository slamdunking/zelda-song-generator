import { connect } from 'react-redux'
import MusicSheetPresenter from '../presenters/music-sheet'
import { setNotes, toggleModal } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    song_name: state.header.title,
    notes: state.musicSheet.notes,
    filename: state.musicSheet.filename ? state.musicSheet.filename : '',
    instrument: state.instrument.name
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeNote: (notes, index)=> {
      const filtered_notes = notes.filter(function(note, curr_index){
        if(curr_index !== index){
          return note
        }
        return false
      })
      dispatch(setNotes(filtered_notes))
    },
    changeTimeValue: (notes, time_index)=> {
      // const updated_notes = notes.forEach(function(note, curr_index){
      //   if(curr_index === index){
      //     note.time_value = 
      //   }
      //   return note
      // })
      // dispatch(setNotes(filtered_notes))
    },
    changeStatus: (elm)=> {
      elm.className += ' pending'
    },
    showAttributions: ()=> {
      dispatch(toggleModal(true, 'attributions'))
    },
    showEmail: ()=> {
      dispatch(toggleModal(true, 'email'))
    }
  }
}

const MusicSheet = connect(mapStateToProps,mapDispatchToProps)(MusicSheetPresenter)

export default MusicSheet