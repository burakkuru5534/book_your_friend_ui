import PostList from "./PostList";
import useFetch from "./useFetch";
import Navbar from "./Navbar";
const Home = () => {

   const {data:posts, isPending, error} = useFetch('http://localhost:8080/usr/post')
   console.log(posts);

  return ( 
   <div className="home">
       <Navbar/>
       {error && <div> {error} </div>}
       {isPending && <div>Loading...</div>}
      {posts && <PostList posts={posts} title="All posts!" userName = {localStorage.getItem("username")}/>}
   </div>
);
 
}
 
export default Home;