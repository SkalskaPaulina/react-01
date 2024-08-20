import "./About.css";
import { Employee } from "../entity/Employee";

interface AboutProps {
  readonly employee: Employee;
}

export function About(props: AboutProps) {
  return (
    <div className="about-employee">
      <div className={`about-employee-pic ${props.employee.className}`}></div>
      <div className="about-employee-desc">
        <h3 className="about-employee-name">
          {props.employee.firstName} {props.employee.lastName} [{" "}
          {props.employee.brandFirm} ]
        </h3>
        <p className="about-employee-desc">{props.employee.text}</p>
      </div>
    </div>
  );
}
