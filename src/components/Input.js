import React, {Component} from 'react'
import { connect } from 'react-redux'

class Input extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name: null,
            msg: null,
        }
        this.nameInput = this.nameInput.bind(this)
        this.msgInput = this.msgInput.bind(this)
    }
    msgInput(val){
        let value = val.target.value
        this.setState(
            {
                msg: value
            }
        )
    }
    nameInput(val){
        let value = val.target.value
        this.setState(
            {
                name: value
            }
        )
    }
    render(){
        return(
  
            <div className = "row">
                <div className = "col-md-12">
                    <div className = "alert alert-success b0">Write Message</div>
                    <p>{this.state.name}</p>
                    <input className = "form-control b0 my-2" placeholder = "Enter Name" type = "text" onChange = {this.nameInput}/>
                    <input className = "form-control b0 my-2" placeholder = "Enter Message" type = "text" onChange = {this.msgInput}/>
                    <button className = "btn b0 btn-info" onClick = {this.props.newItem}>Enter</button>
                    <button className = "btn b0 btn-danger ml-2" type = "reset">Clear</button> 
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        allMessages: state.allMessages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newItem: () => dispatch({
            type: 'NEW_INPUT',
            payload: {
                name: 'Andrew',
                msg:  'Ma-7'
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)