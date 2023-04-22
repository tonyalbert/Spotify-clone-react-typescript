import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Album = () => {
    const { id } = useParams();

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 className="text-light">Album {id}</h1>
            </div>
        </div>
    )
}

export default Album;