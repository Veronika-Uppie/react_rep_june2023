import React from 'react';

const UserComponent = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
        </div>
    );
};

export default UserComponent;