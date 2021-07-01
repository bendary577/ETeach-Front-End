import axios from "axios";
import {GET_ALL_CATEGORIES_COURSES, GET_COURSE} from './APIS';

class CoursesServices {


    //----------------------------- get categories courses method --------------------------------------------
    async getCategoriesCourses() {
        const response = await axios.get(GET_ALL_CATEGORIES_COURSES, { headers : { Authorization : `Bearer `+localStorage.getItem('token')}});
            if (response.status === 200) {
                return response.data;
            }
    }

    //----------------------------- get categories courses method --------------------------------------------
    async getCourse(id) {
        console.log("in get couuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuurse")
        const response = await axios.get(GET_COURSE+`/${id}`, { headers : { Authorization : `Bearer `+localStorage.getItem('token')}});
          if (response.status === 200) {
            return response.data;
          }
    }

  
}

export default new CoursesServices();