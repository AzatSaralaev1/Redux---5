import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from "./pages/postPage/PostPage";
import CreatePostPage from "./pages/createPostPage/CreatePostPage";




const App = () => {
  return (
    <div>
        <PostPage/>
        {/*<CreatePostPage/>*/}
    </div>
  );
};

export default App;