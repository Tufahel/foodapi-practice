import { useEffect, useState } from "react";

function GetLikes (props) {
    const {id} = props;
    const [likes, setLikes] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    const hello = 0;

    useEffect(() => {
        fetchLikes();
    }, []);

    const fetchLikes = async () => {
        const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FGfLuFSlCkJb0ayRV4eC/likes";
        const response = await fetch(url)
            .then((res) => res.json());
        console.log('res likes: ', response);
        hello = hello + 1;
        console.log("hello: ", hello);
        setLikes(response);
        setLikeCount(likes[id-1].likes);
    }

    console.log('likeCount: ',likeCount);

    return (
        <div>
            Like: {likeCount}
        </div>
    )
}

export default GetLikes;