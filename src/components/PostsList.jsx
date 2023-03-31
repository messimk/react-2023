import { useState, useEffect } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
function PostsList({isPosting, onStopPosting}) {
  //fetch('http://localhost:8080/posts').then(Response => Response.json()).then(
    //data => {setPosts(data.posts);
    //});
  const [posts,setPosts] = useState([]);
  function addPostHandler(postData) {
    fetch('http://localhost:5173//posts', 
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers:{
        'Content-Type':'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
   
    return (
    <>
    {isPosting && (
     <Modal onclose={onStopPosting}>
      <NewPost 

        onCancel={onStopPosting}
        onAddPost = {addPostHandler}
      />
     </Modal> )}
     
     <ul className={classes.posts}>
         {posts.map((post) => <Post author={post.author} body={post.body} />)}
     </ul>
     {posts.length == 0 && (
      <div style = {{color: 'white', textAlign:'center'}}>
       <h1>There is no any post</h1>
       <h2>For post click new post button and Submit</h2>
      </div>
     )}
    </>
    );
}
export default PostsList;