import { useState } from "react";
import "../styles/Popup.css";

function Comments(props) {
    const {id} = props;
    const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nolPA6A8i8n8Qi2zMdgc/comments";
    const [comment, setComment] = useState({
        item_id: id,
        comment: '',
        username: '',
    })

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {'Content-Type':'application/json'},
        });
        console.log('comment id: ', id);
        console.log('submit comment result: ',res);
        return res;
        
    }

    return (
        <div className="modal-desc">
            <form action="" onSubmit={handleSubmit}>
                <input placeholder="username" type="text" name="username" minLength="1" maxLength="50" onChange={handleChange} value={comment.username} required />
                <textarea placeholder="comment" type="text" name="comment" minLength="1" maxLength="500" onChange={handleChange} value={comment.comment} rows={5} cols={20} required />
                <button type="submit">Comment Now</button>
            </form>
        </div>
    );
}

export default Comments;