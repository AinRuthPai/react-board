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
            <Link to='/web/0' className='nav_link'>
              WEB
            </Link>
          </li>
          <li>
            <Link to='/css/0' className='nav_link'>
              CSS
            </Link>
          </li>
          <li>
            {/* <Link to='/javascript/0' className='nav_link'> */}
            JavaScript
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to='/react/0' className='nav_link'> */}
            React
            {/* </Link> */}
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
