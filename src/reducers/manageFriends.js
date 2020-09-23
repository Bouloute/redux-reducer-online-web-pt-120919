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
      let arr = {...state}.friends
      var filtered = arr.filter(function(value, index, arr){ return value.id != action.id;});
      
      return (
         { 
          ...state,
          friends: filtered
        }
      )
      
      default:
        return state
  }
}
