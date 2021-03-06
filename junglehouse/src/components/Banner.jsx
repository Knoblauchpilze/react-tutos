
import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
  const title = "The Jungle House";

  return (
    <div className="tjh_banner">
      <div className="tjh_banner_row">
        <img src={logo} alt="The Jungle House" className="tjh_logo" />
        <h1 className="tjh_title">{title}</h1>
      </div>
    </div>
  );
}

export default Banner
