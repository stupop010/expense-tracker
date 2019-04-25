export const getUser = state => state.auth;
export const getUserId = state => state.auth.user._id;
export const isAuthenticated = state => state.auth.isAuthenticated;
export const successMessage = state => state.auth.message;
