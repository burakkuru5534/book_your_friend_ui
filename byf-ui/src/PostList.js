import { Link } from "react-router-dom";

const PostList = ({ posts, title, userName }) => {
    return ( 
        <div className="post-list">
            <h2>{title}</h2>
            <h2>{userName}</h2>
            
             {posts.map( post => (
                
                <div className="post-preview" key={post.id}>
                   <Link to = {`/usr/post/${post.id}`}>
                   <h2>{post.title}</h2>
                   </Link>
                </div>
                
            ))}
        </div>
     );
}
 
export default PostList;