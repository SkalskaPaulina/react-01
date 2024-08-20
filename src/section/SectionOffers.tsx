import { Offer } from "../component/Offer";
import "./SectionOffers.css";

export function SectionOffers(): React.ReactElement {
  return (
    <section className="padd offers" id="offers">
      <div className="container">
        <h2 className="offer-heading-1">Czym zajmuje się nasza firma?</h2>
        <div className="offers-wrapper">
          {[
            {
              name: "Usługa 1",
              isNew: true,
            },
            {
              name: "Usługa 2",
              isNew: false,
            },
            {
              name: "Usługa 3",
              isNew: false,
            },
            {
              name: "Usługa 4",
              isNew: false,
            },
            {
              name: "Usługa 5",
              isNew: false,
            },
            {
              name: "Usługa 6",
              isNew: false,
            },
          ].map((element) => (
            <Offer name={element.name} isNew={element.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
}
