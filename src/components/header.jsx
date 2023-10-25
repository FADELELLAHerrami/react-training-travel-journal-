import earthIcon from '../assets/icons/earth.svg';


export default function Header(){
    return(
        <header>
            <img src={earthIcon} />
            <h1>my travel journal </h1>
        </header>
    )
}