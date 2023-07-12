import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';




const PostCreate = () => {

    const [content, setContent] = useState('');
    const [title, setTitle] = useState([]);
    const [isActive, setisActive] = useState(false);
    const [isPending, setIsPending] = useState(false); 
    const navigate = useNavigate();

    const [tags,setTag] = useState([]); 

    const handleSubmit = (e) => {

        console.log("before create, token:",localStorage.getItem("token"))
        const headers= {"Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
        const data = {
            content:content,
            title:title,
            isActive:isActive,
            tag:tags
        }
        setIsPending(true);
        e.preventDefault(); // to prevent refresh 
        axios.post('http://localhost:8080/usr/post',data,               { headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`}
            }).then((res) => {
          console.log(res);
        
                setIsPending(false);
                alert('post created!');
                navigate('/home');
        })
    }

    return ( 
        <div className="create">
            <h2>Create a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                >
                </input>
                <label>tag add</label>
                <TagsInput value={tags} onChange={setTag} />
                <label>Post Content:</label>
                <textarea 
                required
                value = { content }
                onChange = {(e) => setContent(e.target.value)}>
                </textarea>
                {!isPending && <button>create post</button>}  
                {isPending && <button disabled>Creating...</button>}
            </form>
        </div>
     );
}
 
export default PostCreate;