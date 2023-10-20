import React from 'react';

const UserDetailsComponent = ({userDetails}) => {
    const {id, name,username , email} = userDetails
    return (
        <div>

            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>email : {email}</div>
            
        </div>
    );
};

export default UserDetailsComponent;