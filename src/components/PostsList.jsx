import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
function PostsList({isPosting, onStopPosting}) {
  const [posts,setPosts] = useState([]);
  function addPostHandler(postData) {
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