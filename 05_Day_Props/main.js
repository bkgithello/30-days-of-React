const getUserInfo = (firstName, lastName, country)=>{
    return `${firstName} ${lastName}. Lives in ${country}`
}

console.log(getUserInfo('bk','goku','netherrom'))

const User = (props) =>{
    return (
        <div>
            <h1>
                {props.firstName}
                {props.lastName}
            </h1>
            <small>{props.country}</small>
        </div>
    )
}

<User firstName='gomen' lastName='jamer' country='Finlad'/>

