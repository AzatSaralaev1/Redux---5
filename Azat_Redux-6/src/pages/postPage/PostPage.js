import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/slice/PostsSlice";
import {post} from "axios";
import Post from "../../components/Post";
import PostSpinner from "../../components/PostSpinner";

function PostPage() {
    const {posts, preloader, error} = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()
    const getPostsFunc = () => {
        dispatch(getPosts())
    }

    useEffect(() => {
        getPostsFunc()
    }, []);


    return (
        <div>
            {/*<button onClick={getPostsFunc}>get posts</button>*/}
            {/*<button>delete all</button>*/}
            {preloader ? <PostSpinner/> :
                error ? <h1>{error}</h1> :
                    posts.map(post => <Post postInfo={post}/>)}
        </div>
    );
}

export default PostPage;