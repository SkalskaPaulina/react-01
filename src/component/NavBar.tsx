import "./NavBar.css";

export function NavBar(): React.ReactElement {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="container container-flex">
          <a className="nav-logo" href="#">
            moja firma
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">
                o nas
              </a>
            </li>
            <li>
              <a href="#offers" className="nav-link">
                oferta
              </a>
            </li>
            <li className="nav-link nav-link-contact">kontakt</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
