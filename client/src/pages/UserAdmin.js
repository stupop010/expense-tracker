import React, { Component } from "react";
import { connect } from 'react-redux'

import {fetchOneExpense} from '../action/expenseAdmin'

class UserAdmin extends Component{
    
  componentDidMount() {
      this.props.fetchOneExpense('5cc1fe210646473a206af431')
  }

    render(){
        console.log(this.props)
        return <div>user admin</div>
    }
}

export default connect(null, {fetchOneExpense})(UserAdmin)