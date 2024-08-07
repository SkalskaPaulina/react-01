import { Offer } from './Offer';
import './SectionOffers.css';

export function SectionOffers(): React.ReactElement {
    return <section className="padd offers" id="offers">
        <div className="container">
      <h2 className="offer-heading-1">Czym zajmuje się nasza firma?</h2>
      <div className="offers-wrapper">
        <Offer
        name='Usługa 1'
        brandNew
        />
        <Offer
        name='Usługa 2'
        />
        <Offer
        name='Usługa 3'
        />
        <Offer
        name='Usługa 4'
        />
        <Offer
        name='Usługa 5'
        />
        <Offer
        name='Usługa 6'
        />
      </div>
    </div>
  </section>
}