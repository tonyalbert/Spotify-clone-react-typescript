import './styles.css';
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { IoLibrarySharp } from 'react-icons/io5';

function Aside()  {
  return (
    <div className="container-fluid" id='container'>
        <img id='logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify" />
      <div id='topLinks'>

        <p className='d-flex align-items-center mb-2'>
          <AiFillHome style={{ marginRight: '15px' }}/>
          Home</p>
        
        <p className='d-flex align-items-center mb-2'>
        <AiOutlineSearch style={{ marginRight: '15px' }}/>
        Search</p>

        <p className='d-flex align-items-center mb-2'>
          <IoLibrarySharp style={{ marginRight: '15px' }}/>
          Your Library</p>
      </div>

      <hr />

      <div id="playlists" className="playlist-container">
        <a href="/">Que horas son, mi corazon?</a>
        <a href="/">Your Top Songs 2022</a>
        <a href="/">As mais tacadas no seu 2022</a>
        <a href="/">Lo-fi</a>
        <a href="/">Que horas son, mi corazon?</a>
        <a href="/">Your Top Songs 2022</a>
        <a href="/">As mais tacadas no seu 2022</a>
        <a href="/">Lo-fi</a>
        <a href="/">Que horas son, mi corazon?</a>
        <a href="/">Your Top Songs 2022</a>
        <a href="/">As mais tacadas no seu 2022</a>
        <a href="/">Lo-fi</a>
        <a href="/">Que horas son, mi corazon?</a>
        <a href="/">Your Top Songs 2022</a>
        <a href="/">As mais tacadas no seu 2022</a>
        <a href="/">Lo-fi</a>
      </div>
        
    </div>
  );
}

export default Aside;