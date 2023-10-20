import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls/urls";

const userServices = {
    getAll:() =>axiosService.get(urls.users.base),
    getById:(id) =>axiosService.get(urls.users.byId(id))
}

export {
    userServices
}