import { useEffect, useState } from "react";
import "../styles/Popup.css";

function Comments(props) {
    const {id} = props;
    const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nolPA6A8i8n8Qi2zMdgc/comments";
    const [data, setData] = useState({
        item_id: id,
        comment: '',
        username: '',
    })
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []);
    
    const fetchComments = async () => {
        const response = await fetch(`${url}?item_id=${id}`)
            .then((res) => res.json())
        console.log('comments of id: ', id, response);
        setComments(response);
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'},
        });
        console.log('comment id: ', id);
        console.log('submit comment result: ',res);
        fetchComments();
        return res;
    }

    return (
        <div className="modal-desc">
            {
            comments.length > 0 && comments.map((com) => (
                <div key={id}>
                    <h1>
                    Name: {com.username}
                    </h1>
                    <p>
                    Comment: {com.comment}
                    </p>
                    <hr />
                </div>
            ))}
            <form action="" onSubmit={handleSubmit}>
                <input placeholder="username" type="text" name="username" minLength="1" maxLength="50" onChange={handleChange} value={data.username} required />
                <textarea placeholder="comment" type="text" name="comment" minLength="1" maxLength="500" onChange={handleChange} value={data.comment} rows={5} cols={20} required />
                <button type="submit">Comment Now</button>
            </form>
        </div>
    );
}

export default Comments;