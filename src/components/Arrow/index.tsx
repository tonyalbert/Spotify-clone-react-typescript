import './style.css';
import { BiLeftArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom'

const Arrow = () => {
    return (
        <div id="navegar">
            <Link to={'/'}>
                <BiLeftArrowCircle />
            </Link>
        </div>
    );
};

export default Arrow;