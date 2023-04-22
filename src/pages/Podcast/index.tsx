import { useParams } from "react-router-dom";

const Podcast = () => {
    const { id } = useParams();

    return (
        <div>
            <div className="container">
                <h1 className="text-light">Podcast {id}</h1>
            </div>
        </div>
    )
}

export default Podcast;