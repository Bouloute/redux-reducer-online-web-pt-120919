export function manageFriends(state = {friends: []}, action){
  switch(action.type){
    case "ADD_FRIEND":
      return(
        { 
          ...state,
          friends: [
            ...state.friends,
            action.friend
            ]
        }
      )
      
    case "REMOVE_FRIEND":
      const copiedState = {...state}
      const arr = copiedState.friends
      console.log("======COPIED=======")
      console.log(arr)
      var filtered = array.filter(function(value, index, arr){ return value > action.id;});
      console.log("======MODIFIED=======")
      console.log(arr)
      console.log("======ORIGINAL=======")
      console.log(state)
      console.log("======RETURNED=======")
      console.log({ 
          ...state,
          friends: arr
        })
        
      return (
         { 
          ...state,
          friends: arr
        }
      )
      
      default:
        return state
  }
}
