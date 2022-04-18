import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to='/'>Tech Blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/web0' className='nav_link'>
              WEB
            </Link>
          </li>
          <li>
            <Link to='/css0' className='nav_link'>
              CSS
            </Link>
          </li>
          <li>
            <Link to='/javascript0' className='nav_link'>
              JavaScript
            </Link>
          </li>
          <li>
            <Link to='/react0' className='nav_link'>
              React
            </Link>
          </li>
          <li>
            <Link to='/board' className='nav_link'>
              자유 게시판
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
