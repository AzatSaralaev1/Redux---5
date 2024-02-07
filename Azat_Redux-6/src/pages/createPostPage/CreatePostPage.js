import React, {useState} from "react";
import {useDispatch, UseDispatch, useSelector} from "react-redux";
import {createPost} from "../../store/slice/PostsSlice";

function CreatePostPage() {
    const dispatch = useDispatch()
    const {error} = useSelector(state => state.postsReducer)
    const [form, setForm] = useState({})
    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(createPost(form))
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' name='title' onChange={changeForm}/>
                <textarea cols='30' rows='10' name='description' onChange={changeForm}></textarea>
                <button type='submit'>create post</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )

}

export default CreatePostPage