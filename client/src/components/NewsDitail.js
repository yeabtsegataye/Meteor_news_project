import {useParams, useNavigate} from "react-router-dom";
import Usefetch from "./api";
import { useState } from "react";
import './css/NewsDitail.css'
const NewsDitaile = () => {

    const Navigate = useNavigate();
    const _id = useParams();
    const id = _id.id;
    const url = `http://localhost:5000/NewsDitaile/${id}`;
    const {news , loding, error} = Usefetch(url);
    
    const [title , setTitle] = useState(news.title);
    const [body , setBody] = useState(news.title);
    const [author, setAuthor] = useState(news.title);

    
    const updated = {title, body, author};
   
    // this function will delete the news on click
    
    const handl_delete=()=>{
        fetch(url, {
            method : "DELETE"
        })
          .then(()=> console.log('deleted'))  
          .catch(err => console.error(err));
        setTimeout(() => {
            Navigate("/")
          }, 1000);
          
    }

    // this function will update the post

    const handl_update =() =>{
      
        fetch(url, {
            method : "PUT",
            headers :{ "content-type": "application/json"},
            body: JSON.stringify(updated)
        })
          .then(()=> console.log('updated'))  
          .catch(err => console.error(err));
          Navigate('/')
    }

    // this function will get you back to the home page
    
    const handl_back = ()=>{
        Navigate("/")
    }

    return (  
        <div className="container">
          {error && <div>{error}</div>}
          {loding && <div>Loding...</div>}
         { !loding && <div>
   <div> <form  onSubmit={handl_update}>
      <div className="mb-3">
  <label  className="form-label">Titel</label>
     <input 
    type="text"
    name="title" 
    required   
    className="form-control" 
    placeholder="title hear..."
    defaultValue={news.title}
    onChange={(e)=>
       setTitle(e.target.value)}

    />
    
</div>
<div className="mb-3">
  <label  className="form-label">Body</label>
  <textarea 
  className="form-control" 
  name="body" 
  required 
  rows="3"
  defaultValue={news.body}
  onChange={(e)=>
    setBody(e.target.value)
}> 

  </textarea>
</div>
<div className="mb-3">
  <label  className="form-label">Author</label>
  <input 
  type="text" 
  className="form-control" 
  name="author" 
  required  
  placeholder="Author hear..."
  defaultValue={news.author}
  onChange={(e)=>
    setAuthor(e.target.value)
}
  />
   
</div>

<button type="submit" className="btn btn-secondary">Edit News</button>
    <span> </span>
    <button className="btn btn-secondary" onClick={handl_delete}>Delete Me</button>
        <span>  </span>
         <button className="btn btn-secondary" onClick={handl_back}>Back to Home</button>
    </form> 
    
    </div>
    </div>}
        </div>
    );
    
}

export default NewsDitaile;