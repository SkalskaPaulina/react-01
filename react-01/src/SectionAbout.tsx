import { About } from './About';
import './SectionAbout.css';

export function SectionAbout(): React.ReactElement {
return <section className="padd about" id="about">
  <div className="container">
    <h2 className="about-heading-2">Nasi specjaliści</h2>
      <div className="about-employee">
        <About
      className='about-employee-pic-woman'
      name=' Imie i Nazwisko'
      brandFirm='dział'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        vel massa et lacus egestas cursus a non magna. Fusce scelerisque
        blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
        tempor elementum lorem in, varius pellentesque ligula. Duis
        efficitur lacinia enim, non tincidunt libero ultrices in.'
        />
        <About
      className='about-employee-pic-man'
      name=' Imie i Nazwisko'
      brandFirm='dział'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        vel massa et lacus egestas cursus a non magna. Fusce scelerisque
        blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
        tempor elementum lorem in, varius pellentesque ligula. Duis
        efficitur lacinia enim, non tincidunt libero ultrices in.'
        />

      </div>
  </div>
</section>
}