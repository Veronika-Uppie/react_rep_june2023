const Simpson = ({item}) => {
    return (
        <div>
            <div>{item.name} {item.surname}</div>
            <div>{item.age} років</div>
            <div>{item.info}</div>
            <img src={item.photo} alt={item.name}/>
        </div>
    );

}

export default Simpson;