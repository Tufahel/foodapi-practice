import { useEffect, useRef, useState } from "react";

function PostLikes (props) {
    const {id} = props;
    const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FGfLuFSlCkJb0ayRV4eC/likes";
    const [likes, setLikes] = useState([]);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        fetchLikes();
    }, []);

    const fetchLikes = async () => {
        const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FGfLuFSlCkJb0ayRV4eC/likes";
        const response = await fetch(url)
            .then((res) => res.json());
        console.log('res likes: ', response[id-1]);
        setLikes(response);
        if(likes[id-1] !== undefined)
            setLikeCount(likes[id-1].likes);
    }

    const postLike = (id, e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({item_id: id}),
            headers: {'Content-Type': 'application/json'},
        });
    }
    return (
        <div>
            <div>
                <p>{likeCount}</p>
                <button type="button" onClick={()=>postLike(id)}>LikeLike</button>
            </div>
        </div>
    )
}

export default PostLikes;