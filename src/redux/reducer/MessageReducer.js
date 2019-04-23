
let MessageReducer = function (state = [],action){

    if(action.type === "NEW_INPUT")
    {
        let newInput = {
            name    : action.payload.name,
            msg     : action.payload.msg
        }

        var newState = Object.assign([], state)
        newState.push(newInput)
        return newState
    }

    if(action.type === "FETCH_MESSAGES")
    {
        console.log("FETCHING ALL MESSAGES")   
        return state
    }

    

    return state

}

export default MessageReducer