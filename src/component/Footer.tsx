import "./Footer.css";

export function Footer(): React.ReactElement {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="container container-flex footer-container">
          <span className="footer-credits">
            Nazwa firmy - wszelkie prawa zastrzeżone, 2019
          </span>
          <ul className="footer-links">
            <li>
              <a href="#" className="medium">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="medium">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
