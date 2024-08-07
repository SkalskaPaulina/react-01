import './NavBar.css';

export function NavBar(): React.ReactElement {
    return <nav className="navbar">
    <div className="container container-flex">
      <a className="nav-logo" href="#">moja firma</a>
      <ul className="nav-links">
        <li><a href="#about" className="nav-link">o nas</a></li>
        <li><a href="#offers" className="nav-link">oferta</a></li>
        <li><a href="#" className="nav-link nav-link-contact">kontakt</a></li>
      </ul>
    </div>
  </nav>
}