import japanImage from '../assets/images/japan1.png';
import locationIcon from '../assets/icons/location.svg'






export default function Card(props){
    return(
        <section className='card'>
            <img src={props.imageUrl} />
            <div className='MainContent'>
                <div>
                    <span><img src={locationIcon} /></span>
                    <span className='card-country'>{props.location}</span>
                    <span className='card-location'><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div> 
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p className='card-text'>{props.description}</p>
            </div>
        </section>
    )
}