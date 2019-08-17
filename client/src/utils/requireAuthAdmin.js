import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default function (Conmponent) {
    class Authenticate extends Component {
        
        componentWillMount() {
            if (!this.props.isAdmin) {
                console.log(this.props.isAdmin)
                this.context.router.history.push('/')                        
            }
        }

        render () {
            return(
            <Conmponent {...this.props} />
            )
        }   
    }
    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }
    const mapStateToProps = state => {
        return {
          isAdmin: state.authUser.isAdmin
        }
    }
    return connect(mapStateToProps)(Authenticate)
}