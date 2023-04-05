import { UserActionTypes } from "./user.type";

export const setCurrentUser = user => ({ //user his payload
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
