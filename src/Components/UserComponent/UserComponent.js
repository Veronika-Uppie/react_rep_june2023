import React from 'react';

const UserComponent = ({user, showDetails}) => {
    const {id, name} = user;


    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={()=> showDetails(id)}>Details</button>
        </div>
    );
};

export default UserComponent;