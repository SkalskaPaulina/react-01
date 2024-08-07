import './About.css';
interface AboutProps {
    readonly name: string;
    readonly text: string;
    readonly brandFirm?: string;
    readonly className?: string;
}

export function About(props: AboutProps) {
return <div className={`about-employee-pic ${props.className}`}>
    <div className="about-employee-desc">
      <h3 className="about-employee-name">{props.name} [ {props.brandFirm} ]</h3>
      <p> {props.text} </p>
    </div> 
    </div>
}