import troll from '../images/troll.png'

function Header() {
  return (
    
      <header className="header">
        <img src={troll} className="header--image"/>
        <h1 className="header--title">Meme Generator </h1>
        <h1 className="header--project">React Course -Project 3 </h1>
      </header>
  );
}

export default Header;