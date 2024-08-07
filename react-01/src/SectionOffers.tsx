import './SectionOffers.css';

export function SectionOffers(): React.ReactElement {
    return <section className="padd offers" id="offers">
        <div className="container">
      <h2 className="offer-heading-1">Czym zajmuje się nasza firma?</h2>
      <div className="offers-wrapper">
        <div className="offers-wrapper-box">
          <div className="offers-wrapper-box-dot"></div>
          <div className="offers-wrapper-box-cnt">
            <h3 className="offer-heading-2">Usługa 1</h3>
            <span>(nowość)</span>
          </div>
        </div>
        <div className="offers-wrapper-box">
          <div className="offers-wrapper-box-cnt">
            <h3 className="offer-heading-2">Usługa 2</h3>
          </div>
        </div>
        <div className="offers-wrapper-box">
          <div className="offers-wrapper-box-cnt">
            <h3 className="offer-heading-2">Usługa 3</h3>
          </div>
        </div>
        <div className="offers-wrapper-box">
          <div className="offers-wrapper-box-cnt">
            <h3 className="offer-heading-2">Usługa 4</h3>
          </div>
        </div>
        <div className="offers-wrapper-box">
          <div className="offers-wrapper-box-cnt">
            <h3 className="offer-heading-2">Usługa 5</h3>
          </div>
        </div>
        <div className="offers-wrapper-box last">
          <div className="offers-wrapper-box-cnt">
            <h3 className="offer-heading-2">Usługa 6</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
}