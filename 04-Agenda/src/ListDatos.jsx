const ListDatos=({name,email,face,emailUrl,faceUrl})=>{
    return(
        <li>
            <h3><a>{name}</a></h3>
            <a>Correo: </a>    <a href={emailUrl}>{email}</a> <br/>
            <a>Facebook: </a>  <a href={faceUrl}>{face}</a>
        </li>
    )
}
export default ListDatos