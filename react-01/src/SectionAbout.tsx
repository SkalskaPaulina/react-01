import './SectionAbout.css';

export function SectionAbout(): React.ReactElement {
return <section className="padd about" id="about">
<div className="container">
  <h2 className="about-heading-2">Nasi specjaliści</h2>
  <div className="about-employee">
    <div className="about-employee-pic about-employee-pic-woman"></div>
    <div className="about-employee-desc">
      <h3 className="about-employee-name">Imię Nazwisko [dział]</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        vel massa et lacus egestas cursus a non magna. Fusce scelerisque
        blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
        tempor elementum lorem in, varius pellentesque ligula. Duis
        efficitur lacinia enim, non tincidunt libero ultrices in.
      </p>
    </div>
  </div>
  <div className="about-employee">
    <div className="about-employee-pic about-employee-pic-man"></div>
    <div className="about-employee-desc">
      <h3 className="about-employee-name">Imię Nazwisko [dział]</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        vel massa et lacus egestas cursus a non magna. Fusce scelerisque
        blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
        tempor elementum lorem in, varius pellentesque ligula. Duis
        efficitur lacinia enim, non tincidunt libero ultrices in.
      </p>
    </div>
  </div>
</div>
</section>
}