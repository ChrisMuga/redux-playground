import React, {Component} from 'react'
import {connect} from 'react-redux'
class Messages extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            messages: null,
        }
        this.fetchMessages = this.props.fetchMessages.bind(this)
    }

    componentWillMount(){
        this.props.fetchMessages()
        console.log(this.props.allMessages)
    }

    componentDidUpdate(){
        console.log('it did')
    }

    componentWillReceiveProps(nextProps){
        this.props.allMessages.unshift(nextProps.state)
    }


    render(){
        if(this.props.allMessages.length === 0)
        {
            return (
                <div className = "alert b0 alert-danger">
                    <h6>Move along, nothing to see...</h6>
                    <button className = "btn btn-success b0" onClick = {this.props.fetchMessages}>Fetch</button>
                </div>
            )
        }else{
        return(
            <div>
                <div className = "alert alert-info b0">Messages</div>
                {
                     this.props.allMessages.map(msg => (
                        <div key ={msg.name}>
                            <p>{msg.name}</p>
                        </div>
                    ))
                }
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