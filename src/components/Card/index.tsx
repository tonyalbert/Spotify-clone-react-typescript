import './styles.css';
import { Link } from 'react-router-dom';
import Slugify from '../../utils/Slug/Slugify';

interface ICardProps {
    image: string;
    title: string;
    name: string;
    type: string;
}
const Card:React.FC<ICardProps>  = ({image, title, name, type}) => {
    return (
      <Link to={`/${type}/${Slugify(title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div id="simpleCard">
            <img src={image} alt="image" />
            <h3 id='product'>{title}</h3>
            <p id='name'>{name}</p>
        </div>
    </Link>
    )
}

export default Card;