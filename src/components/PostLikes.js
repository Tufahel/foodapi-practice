
function PostLikes (props) {
    const {id} = props;
    const postLike = (id) => {
        const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FGfLuFSlCkJb0ayRV4eC/likes";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({item_id: id}),
            headers: {'Content-Type': 'application/json'},
        });
    }
    return (
        <div>
            Likes
            <button type="button" onClick={()=>postLike(id)}>LikeLike</button>
        </div>
    )
}

export default PostLikes;