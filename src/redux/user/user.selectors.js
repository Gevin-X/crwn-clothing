import { createSelector } from "reselect";

const selectUser = state => state.user;

//const selectCart = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user)=> user.currentUser
)