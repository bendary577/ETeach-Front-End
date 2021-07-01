import axios from "axios";
import {GENERAL_GET_ALL_CATEGORIES} from './APIS';
//import authHeader from "./AuthHeader";


class GeneralReuests {

  //----------------------------- get all categories method --------------------------------------------
  async getAllCategories(data) {
    const response = await axios.get(GENERAL_GET_ALL_CATEGORIES);
      if (response.status === 200) {
        return response.data.data;
      }else if(response.status === 401){
      }
  }


}

export default new GeneralReuests();