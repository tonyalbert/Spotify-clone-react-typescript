import './styles.css';
import LongCard from '../../components/LongCard';
import Card from '../../components/Card';
import Saudacao from '../../utils/Saudacao/Saudacao';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const Home = () => {

    const saudacaoAtual: string = Saudacao();
      
    return (
        <div className='container' id='homeContainer'>
            <NavBar />
            <h1 id='title'>{saudacaoAtual}</h1>
            <div className="row">
                <div className="col">
                    <LongCard 
                    image={"https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg"}
                    title={"NerdCast"}
                    type={"podcast"}
                    />
                </div>
                <div className="col">
                    <LongCard 
                    image={"https://tracklist.com.br/wp-content/uploads/2021/12/childish-gambino-awaken-my-love.jpg"}
                    title={"Awaken, My Love!"}
                    type={"album"}
                    />
                </div>
                <div className="col">
                    <LongCard 
                    image={"https://m.media-amazon.com/images/I/61StCk7Si8L._AC_SX466_.jpg"}
                    title={"Próxima Estación: Esperanza"}
                    type={"album"}
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <LongCard 
                    image={"https://m.media-amazon.com/images/I/71UzjXRiGHL._AC_SX679_.jpg"}
                    title={"Igor"}
                    type={"album"}
                    />
                </div>
                <div className="col">
                    <LongCard 
                    image={"https://i.scdn.co/image/ab6765630000ba8aff61f660424c8b8f724ca1ba"}
                    title={"Respondendo em Voz Alta"}
                    type={"podcast"}
                    />
                </div>
                <div className="col">
                    <LongCard 
                    image={"https://i.scdn.co/image/ab67616d0000b273ecd3c4a6471f81b9e1a9df98"}
                    title={"Trap The Fato"}
                    type={"album"}
                    />
                </div>
            </div>

            <Link to='/programas' style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="d-flex align-items-center">

            <h1 className="flex-grow-1" id='programas'>Seus programas</h1>
            <a id='show' className="ml-auto mt-4">Mostrar tudo</a>
            </div>
            </Link>

            <div className="row gx-2">
                <div className="col">
                <Link to='/programas' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card
                    image={'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg'}
                    title={"NerdCast"}
                    name={"Jovem Nerd"}
                    type={"podcast"}
                    />
                </Link>
                </div>

                <div className="col">
                    <Card
                    image={'https://i.scdn.co/image/ab6765630000ba8aff61f660424c8b8f724ca1ba'}
                    title={"Respondendo em Voz Alta"}
                    name={"Laurinha Lero"}
                    type={"podcast"}
                    />
                </div>

                <div className="col">
                    <Card
                    image={'https://i.scdn.co/image/1cc50a77424f56fb78d4699356c5823406671436'}
                    title={"Café Debug"}
                    name={"Café Debug seu podcast de tecnologia"}
                    type={"podcast"}
                    />
                </div>

                <div className="col">
                    <Card
                    image={'https://i.scdn.co/image/51d62ddf26c8e15ce7e8789419da664dd89f21a4'}
                    title={"Podcast FallaDev"}
                    name={"Rocketseat"}
                    type={"podcast"}
                    />
                </div>

                <div className="col">
                    <Link to='/programas' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card
                        image={'https://res.cloudinary.com/practicaldev/image/fetch/s--hCj_C_4p--/c_fill,f_auto,fl_progressive,h_420,q_auto,w_420/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/403/4c0d6b39-e787-4d38-b31e-8525dcdeeab7.png'}
                        title={"DevPro"}
                        name={"DevPro"}
                        type={"podcast"}
                        />
                    </Link>
                </div>

            </div>

            <Link to='/programas' style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="d-flex align-items-center">

            <h1 className="flex-grow-1" id='programas'>Tyler, The Creator</h1>
            <a id='show' className="ml-auto mt-4">Mostrar tudo</a>
            </div>
            </Link>

            <div className="row gx-2">

            <div className="col">
                    <Card
                    image={'https://musicainstantanea.com.br/wp-content/uploads/2023/03/Tyler-The-Creator-%E2%80%93-Call-Me-If-You-Get-Lost-The-Estate-Sale-compressed.jpg'}
                    title={"Call Me If You Get Lost: The Estate..."}
                    name={"Tyler, the Creator"}
                    type={"album"}
                    />
            </div>

                <div className="col">
                    <Link to='/programas' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card
                        image={'https://akamai.sscdn.co/uploadfile/letras/albuns/6/5/9/4/1101691624627384.jpg'}
                        title={"Call Me If You Get Lost"}
                        name={"Tyler, the Creator"}
                        type={"album"}
                        />
                    </Link>
                </div>

                <div className="col">
                    <Link to='/programas' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card
                        image={'https://m.media-amazon.com/images/I/71UzjXRiGHL._AC_SX679_.jpg'}
                        title={"Igor"}
                        name={"Tyler, the Creator"}
                        type={"album"}
                        />
                    </Link>
                </div>

                <div className="col">
                    <Link to='/programas' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card
                        image={'https://m.media-amazon.com/images/I/71H4GD0XjDL._AC_SX522_.jpg'}
                        title={"Wolf"}
                        name={"Tyler, the Creator"}
                        type={"album"}
                        />
                    </Link>
                </div>

                <div className="col">
                    <Link to='/programas' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card
                        image={'https://upload.wikimedia.org/wikipedia/en/7/7a/Goblincover.jpg'}
                        title={"Goblin"}
                        name={"Tyler, the Creator"}
                        type={"album"}
                        />
                    </Link>
                </div>

            </div>



        </div>
    )
}

export default Home;