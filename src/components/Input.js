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
        this.nameInput  =     this.nameInput.bind(this)
        this.msgInput   =     this.msgInput.bind(this)
        this.addMsg     =     this.addMsg.bind(this)
        
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

    addMsg=(e)=>{
        let name    = this.state.name
        let msg     = this.state.msg
        console.log(name,msg)
        this.props.newItem(name, msg)
        e.preventDefault();
    }

    
    
    render(){
        return(
            
            <div className = "div">
                    <div className = "alert alert-success b0">Write Message</div>
                    <p>{this.state.name}</p>
                    <form>
                        <input className = "form-control b0 my-2" placeholder = "Enter Name"    type = "text"   onChange = {this.nameInput} required/>
                        <input className = "form-control b0 my-2" placeholder = "Enter Message" type = "text"   onChange = {this.msgInput} required/>
                        <button className = "btn b0 btn-info" onClick = {this.addMsg}>Enter</button>
                        <button className = "btn b0 btn-danger ml-2" type = "reset">Clear</button> 
                    </form>
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
        newItem: (name,msg) => dispatch({
            type: 'NEW_INPUT',
            payload: {
                name: name,
                msg: msg
            }
        })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Input)