import React, {Component} from 'react'
import Input from './Input'
import Messages from './Messages'

class Main extends Component{
    render(){
        return (
            <div className = "row my-2">
                <div className = "col-md-4">
                    <Input/>
                </div>
                <div className = "col-md-8">
                    <Messages/>
                </div>
            </div>
        )
    }
}

export default Main