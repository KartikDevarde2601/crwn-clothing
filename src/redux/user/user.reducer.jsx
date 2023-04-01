const INITIAL_STATE = {
    currentUser:null
}

const userReducer=(State=INITIAL_STATE,action)=>{
switch(action.type){
    case 'SET_CURRENT_USER':

        return {
      ...State,
      currentUser:action.payload
    }

    default:
        return State;
}
}
export default userReducer;