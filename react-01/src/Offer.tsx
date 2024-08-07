import './Offer.css';
interface OfferProps {
    readonly name: string;
    readonly brandNew?: boolean;
}

export function Offer(props: OfferProps) {
    return <div className="offers-wrapper-box">
    {props.brandNew && <div className="offers-wrapper-box-dot"></div>}
    <div className="offers-wrapper-box-cnt">
      <h3 className="offer-heading-2">{props.name}</h3>
    {props.brandNew && <span>(nowość)</span>}
    </div>
  </div>
}