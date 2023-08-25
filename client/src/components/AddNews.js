import {useState  } from 'react';
import {useNavigate} from 'react-router-dom';
import './css/AddNews.css';

const AddNews = () => {
    const history = useNavigate();
    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [author, setAuthor] = useState("");
    const newses = {title, body, author }
    const proxy2 = "http://localhost:5000/postNews"

    const HandleSubmit= (e) => {
      e.preventDefault();
      
      const theData = JSON.stringify(newses)
      console.log(theData);

        fetch(proxy2,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: theData
        })
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
       setTimeout(() => {
          history("/");
       }, 1000); 
    }

    return ( 
        <div className="add">

       
        <div className="container">
        <form  onSubmit={HandleSubmit}>
           <div className="mb-3">
  <label  className="form-label">Titel</label>
     <input 
    type="text"
    name="title" 
    required   
    className="form-control" 
    placeholder="title hear..."
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
  placeholder='body hear...'
  rows="3"
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
  onChange={(e)=>
    setAuthor(e.target.value)
}
  />
   
</div>
<button type="submit" className="btn btn-secondary">Add News</button>
    </form>
        </div >
          <div className='container final'>
        <h4>{title}</h4>
        <p>{body}</p>
        <p>{author}</p>
          </div>
          </div>
     );
}
 
export default AddNews;