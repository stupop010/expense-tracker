export const getUser = state => state.auth;
export const getUserId = state => state.auth.user._id;
export const isAuthenticated = state => state.auth.isAuthenticated;
