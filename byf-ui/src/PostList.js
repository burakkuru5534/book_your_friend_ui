import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    return ( 
        <div className="post-list">
             {posts.map( post => (
                <div className="post-preview" key={post.id}>
                   <Link to = {`/usr/post/${post.id}`}>
                   <h2>{post.content}</h2>
                   </Link>
                </div>
            ))}
        </div>
     );
}
 
export default PostList;