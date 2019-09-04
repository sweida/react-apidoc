import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from 'actions/actionCreators.js'

export default connect(
    state => state.main,
    dispatch => bindActionCreators(actions, dispatch)
)