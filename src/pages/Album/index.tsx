import { useParams } from "react-router-dom";

const Album = () => {
    const { id } = useParams();

    return (
        <div>
            <div className="container">
                <h1 className="text-light">Album {id}</h1>
            </div>
        </div>
    )
}

export default Album;