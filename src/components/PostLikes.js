import { useEffect, useState } from "react";

function PostLikes (props) {
    const {id} = props;
    const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nolPA6A8i8n8Qi2zMdgc/likes";
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        fetchLikes();
    }, []);

    const fetchLikes = async () => {
        const response = await fetch(url)
            .then((res) => res.json())
        console.log('res id likes: ', id, id, response[id]);
        console.log('id, likes: ', response);
        setLikeCount(response[id].likes);
    }

    const postLike = (id) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({item_id: id+1}),
            headers: {'Content-Type': 'application/json'},
        });
        console.log('postLike id: ', id);
        // localStorage.setItem('id', id);
        fetchLikes();
        console.log('likeCount: ', likeCount);
    }

    return (
        <div>
            <div>
                <p>changeable id: {id}</p>
                <p>{likeCount}</p>
                <button type="button" onClick={()=>postLike(id)}>LikeLike</button>
            </div>
        </div>
    )
}

export default PostLikes;