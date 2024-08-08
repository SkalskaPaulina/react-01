import './SectionPage.css';

export function SectionPage(): React.ReactElement {
    return <section className="landing-page">
        <div className="landing-page-shadow">
      <div className="container landing-page-shadow-container">
        <div className="landing-page-text">
          <h1 className="about-heading-1">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <h2 className="heading">Nie wierz nam na słowo - sprawdź</h2>
          <a className="landing-page-link" href="#offers">oferta</a>
        </div>
    </div>
    </div>
  </section>
}