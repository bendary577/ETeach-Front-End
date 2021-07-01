const BASE_API = `http://127.0.0.1:8090`;
//--------------------------- authentication -----------------------------
export const LOGIN_API = `${BASE_API}/api/v1/auth/signin/`;
export const SIGNUP_API = `${BASE_API}/api/v1/auth/signup/`;
export const ME_API = `${BASE_API}/api/v1/user/me/`;

//--------------------------- courses ---------------------------------
export const GENERAL_GET_ALL_CATEGORIES = `${BASE_API}/api/v1/general/categories/`;
export const GET_ALL_CATEGORIES_COURSES = `${BASE_API}/api/v1/categories/courses/`;
export const GET_COURSE = `${BASE_API}/api/v1/courses/`;