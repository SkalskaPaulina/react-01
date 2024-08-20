import { About } from "../component/About";
import { Employee } from "../entity/Employee";
import "./SectionAbout.css";

export function SectionAbout(): React.ReactElement {
  const employees: Employee[] = [
    {
      className: "about-employee-pic-woman",
      firstName: "Imie1",
      lastName: "Nazwisko1",
      brandFirm: "dział 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbivel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    },
    {
      className: "about-employee-pic-man",
      firstName: "Imie2",
      lastName: "Nazwisko2",
      brandFirm: "dział 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbivel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    },
  ];
  return (
    <section className="padd about" id="about">
      <div className="container">
        <h2 className="about-heading-2">Nasi specjaliści</h2>
        {employees.map(
          (employee: Employee): React.ReactElement => (
            <About employee={employee} />
          )
        )}
      </div>
    </section>
  );
}
