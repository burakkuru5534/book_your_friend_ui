import React, { useEffect, useState } from "react"

const App = () => {
  const [posts, setPosts] = useState([])

  const fetchUserData = () => {
   const localStorageToken = localStorage.getItem("token");
   console.log(localStorageToken)

    fetch("http://localhost:8080/api/usr/post",{
      headers:{
         'Authorization': `Bearer ${localStorageToken}`,
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
    })
      .then(response => {
         console.log(localStorageToken)
        return response.json()
      })
      .then(data => {
         setPosts(data)
      })
  }

  useEffect( () => {
   const localStorageToken = localStorage.getItem("token");
   const fetchData = async () => {

      console.log("in home js token:");
      console.log(localStorageToken);
  try {
   const headers =  { "Authorization": `Bearer ${localStorageToken}` }
   const response = await fetch(
     "http://localhost:8080/api/usr/post",
     {
    headers
     }
 );
 if (!response.ok) {
     throw new Error(`Request failed: ${response.status}`);
 }
 const data = await response.json();
 console.log(data);
  } catch (error) {
           console.log(error.message);
  }
   };
   if (localStorageToken) {

      console.log("in if local storage token:");
       fetchData();
   }
}, []);

  return (
    <div>
      {posts.length > 0 && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;