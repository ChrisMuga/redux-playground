
let MessageReducer = function (state = [],action){

    if(action.type === "NEW_INPUT")
    {
        console.log("new input")
        let newInput = {
            name    : action.payload.name,
            msg     : action.payload.msg
        }
        console.log(state)
        state.push(newInput)
        return state
    }

    if(action.type === "FETCH_MESSAGES")
    {
        console.log("FETCHING ALL MESSAGES")   
        console.log(state)
        return state
    }

    

    return state

}

export default MessageReducer