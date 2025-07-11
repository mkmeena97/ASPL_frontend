function UserCard(props){
    return (
        <div>
            <h3>My Name is {props.name}</h3>
            <p>Contact: {props.email}</p>
        </div>
    )
}

export default UserCard;