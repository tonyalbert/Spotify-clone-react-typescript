import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
const Podcast = () => {
    const { id } = useParams();

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 className="text-light">Podcast {id}</h1>
            </div>
        </div>
    )
}

export default Podcast;