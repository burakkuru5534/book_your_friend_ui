import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const PostDetails = () => {

const { id } = useParams();
const navigate = useNavigate();

const {data: post, error, isPending} = useFetch('http://localhost:8080/usr/post/' + id)

const handleDelete = () => {

  axios.delete('http://localhost:8080/usr/post/' + id,{ headers: {
    Authorization : `Bearer ${localStorage.getItem("token")}`}
    }).then(() => {
    navigate('/home');
  });

}

    return ( 
        <div className="post-details">
          
        { isPending && <div>Loading...</div> }
        { error && <div>{error}</div> }
        { post && (
            <article>
              <h2>  { post.title }</h2>
              <div>{ post.content }</div>
              <button onClick={handleDelete}>Delete</button>
            </article>
        ) }

        </div>
     );
}
 
export default PostDetails;