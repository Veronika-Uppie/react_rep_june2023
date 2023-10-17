const Rickandmorty = ({item}) => {
    return (
        <div>
            <div>{item.name} </div>
            <div>Status: {item.status}</div>
            <div>Species: {item.species}</div>
            <div>Gender: {item.gender}</div>
            <img src={item.image} alt={item.name}/>
        </div>
    );

}

export default Rickandmorty;