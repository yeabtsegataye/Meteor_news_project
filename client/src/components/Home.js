import Maper from './maper';
import Usefetch from './api'

const Home = () => {
    const proxy = "http://localhost:5000/getNews"
    const {news, loding, error} = Usefetch(proxy);
    return (  
        <div className="container">
            
           <div>
            {error && <div>{error}</div>}
            {loding && <div>loading...</div>}
            {news && <div><Maper news = {news} /></div>}
            </div>
                <span> </span>
        </div>
    );
}
 
export default Home;