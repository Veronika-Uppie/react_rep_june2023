import React, {useEffect, useState} from 'react';

import UserComponent from "../UserComponent/UserComponent";
import {userServices} from "../../Services/userServices";
import UserDetailsComponent from "../UserDetailsComponent/UserDetailsComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const showDetails = async (userId) => {
        const {data} = await userServices.getById(userId);
        setUserDetails(data)

    } ;

    useEffect(() => {
        userServices.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>

        <div>
            {users.map(user => <UserComponent key = {user.id} user={user} showDetails={showDetails}/>)}
        </div>

            {
                userDetails && <UserDetailsComponent userDetails={userDetails}/>
            }

        </div>
    );
};

export default UsersComponent;