
import './Card.css'
import { Link } from 'react-router-dom';

function Card({image,title,Status, id, data}){
      console.log('data', data)
    
      if(!image){
         return  <></>
         
      }
 return(
      <>
    <div className="card">
          <div className='image_container'><img src={`https://ik.imagekit.io/dev24/${image}`} alt="Profile Picture"></img></div>
          {/* <h2>{title}</h2> */}
          <div><Link to={`/carddescription/${id}`} className="card_title">{title}</Link></div>
          <div className='status'><p>{data.Status}</p></div>
    </div>
   </>
 );
 
}


export default Card;

