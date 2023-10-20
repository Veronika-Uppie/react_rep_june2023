import React, {useEffect, useState} from 'react';
import {axiosService} from "../../Services/AxiosService";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosService.get('/users').then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key = {user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;