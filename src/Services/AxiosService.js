import axios from "axios";
import {baseURL} from "./Services";

const axiosService = axios.create({baseURL});

export {
    axiosService
}
