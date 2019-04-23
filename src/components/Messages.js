import React, {Component} from 'react'
import {connect} from 'react-redux'
class Messages extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            messages: null,
        }
    }
    componentWillMount(){
        this.props.fetchMessages()
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('component did update')
        if(nextProps){
            return true
        }else
        {
            return false
        }
    }

    render(){
        const {allMessages} = this.props
        if(!allMessages)
        {
            return (
                <div className = "alert b0 alert-danger">
                    <h6>Move along, nothing to see...</h6>
                </div>
            )
        }else{
        return(
            <div>
                
                <div className = "alert alert-info b0">Messages {allMessages.length}</div>
                {
                     allMessages.map(msg => (
                        <div key ={msg.name}>
                            <p>{msg.name} says <span className = "badge badge-primary b0">{msg.msg}</span></p>
                        </div>
                    ))
                }
                <button className = "btn btn-warning b0" onClick={()=>{console.log(allMessages)}}>Fetch</button>
            </div>
        )
            }
    }
}



let mapStateToProps = (state) => {
    return {
        allMessages: state.allMessages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: () => dispatch({type: 'FETCH_MESSAGES'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)