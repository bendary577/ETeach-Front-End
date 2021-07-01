import axios from "axios";
import {LOGIN_API, ME_API, SIGNUP_API} from './APIS';

const API_URL = '';

class AuthService {

  //----------------------------- register method --------------------------------------------
 async register(data) {
      const response = await axios.post(SIGNUP_API, data);
      console.log(data.email);
      console.log(data.username);
      console.log(data.grade);
      console.log(data.address);
      console.log(data.phone_number);
      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data.accessToken));
        return response.data;
      }
  }

  //----------------------------- login method --------------------------------------------
  async login(data) {
    const response = await axios.post(LOGIN_API, data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("accountType", response.data.accountType);
        localStorage.setItem("role", response.data.grantedAuthorities.authority);
        return response.data;
      }
  }

    //----------------------------- get user info method --------------------------------------------
    async me() {
        console.log(localStorage.getItem('token'))
        const response = await axios.get(ME_API, { headers : { Authorization : `Bearer `+localStorage.getItem('token')}});
          if (response.status === 200) {
            return response.data;
          }
      }

    //----------------------------- logout method --------------------------------------------
  async logout() {
    const response = await axios
    .post(API_URL + "logout");
    if (response.data.status === 200) {
        localStorage.removeItem("token");
    }
  }

     //----------------------------- forgot password method --------------------------------------------
    async forgotPassword(email) {
      const response = await axios
      .post(API_URL + "forgot_passowrd");
      if (response.data.status === 200) {
          //localStorage.removeItem("user");
      }
    }

    //----------------------------- confirm code method --------------------------------------------
    async confirmCode(confirmation_code) {
      const response = await axios
      .post(API_URL + "confirm_code");
      if (response.data.status === 200) {
          //localStorage.removeItem("user");
      }
    }

  //----------------------------- confirm code method --------------------------------------------
  async updatePassword(password, condfirmPassword) {
    const response = await axios
    .post(API_URL + "update_password", {
      password,
      condfirmPassword
    });
    if (response.data.status === 200) {
        //localStorage.removeItem("user");
    }
  }  
    

    //----------------------------- get current user details method --------------------------------------------
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();