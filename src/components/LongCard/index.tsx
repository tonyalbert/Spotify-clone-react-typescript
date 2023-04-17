import './styles.css';
import Slugify from '../../utils/Slug/Slugify';
import { Link } from 'react-router-dom';

interface ILongCardProps {
    title: string;
    image: string;
    type: string;
}

const LongCard: React.FC<ILongCardProps> = ({title, image, type}) => {
    return (
        <Link to={`/${type}/${Slugify(title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div id="card">
                <img id='imageCard' src={image} alt="imagem card"/>
                <a href='/'>{title}</a>
            </div>
        </Link>
        
    )
}

export default LongCard;