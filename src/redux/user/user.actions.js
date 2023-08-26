import {UserActionTypes} from './user.types'


export const setCurrentUser = user =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

/*
export const setCurrentUser = user => {
    console.log('Payload data:', user); // Log the payload data
    return {
      type: UserActionTypes.SET_CURRENT_USER,
      payload: user
    };
  };
*/