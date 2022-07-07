import "./Header.css";
import reactLogo from "../images/reactjs-icon.png";

function Header() {
  return (
    <header className="Header">
      <nav>
        <img src={reactLogo} alt="React logo" />
        <h1>ReactFacts</h1>
        <p>React Course - Project 1</p>
      </nav>
    </header>
  );
}

export default Header;
