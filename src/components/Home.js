import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

class Home extends Component {

    test() {
        console.log('click');
        this.props.dispatch({type: 'index/changeNum', payload:{num:8}})
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                num is {this.props.num}
                <button onClick={e=> this.test()}> change num</button>
            </React.Fragment>
        )
    }
}

export default connect(state=> {
    return {
        num: state.index.num
    }
})(Home)