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
      for( var i = 0; i < arr.length; i++){
        if ( arr[i].id === action.id) { 
          arr.splice(i, 1); 
          i--; 
        }
      }
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
