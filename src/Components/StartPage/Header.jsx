import movifyLogo from '../../assets/movifyLogo.png';
import './Header.css';


const Header = () => {
  return (
    <div className="page-header">
      <div className="logo">
        <img src={movifyLogo} alt="MoviFy" />
      </div>
    <div className="navbar-items">
        <ul className="items">
            <li className='home'>Home</li>
            <li className='movies'>Movies</li>
            <li className='tv-shows'>TV Shows</li>
            <li className='top-imdb'>Top IMdB</li>
        </ul>
    </div>

    </div>
  )
}

export default Header