import { useEffect, useState } from "react";
import Likes from "./Likes";
import Comments from "./Comments";

function Foods () {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => res.json());
        console.log('res: ', response.categories);
        setData(response.categories);
    }

    return (
        <div>
            {data.map((dt) => (
                <div key={dt.idCategory}>
                    <h1>
                    {dt.strCategory}
                    </h1>
                    <p>
                    {dt.strCategoryDescription}
                    </p>
                    <img src={dt.strCategoryThumb} alt="Food" />
                    <p>id: {dt.idCategory - 1}</p>
                    <Likes id={parseInt(dt.idCategory)-1}/>
                    <Comments id={parseInt(dt.idCategory)-1}/>
                </div>
            ))}
        </div>
    )
}

export default Foods;