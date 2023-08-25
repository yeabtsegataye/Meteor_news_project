import {Link} from 'react-router-dom';
import './css/Home.css'

const Maper = (props) => {
   const news = props.news

    return ( 
    <div className="container">
      { news.map((news) => (
        <div key={news._id} className='links'>
             <Link to={`/NewsDitail/${news._id}`} className='text'>
            <p>{news.title}</p>
            <p>{news.body}</p>
            <p>{news.author}</p>
              </Link>
        </div>
      ))}
      <span className='span'> </span>
    </div> 
    );
}
 
export default Maper;