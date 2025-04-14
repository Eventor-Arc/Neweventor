import { ArrowRight } from "lucide-react";
import "./card.css";

const Cards = ({ title, description }) => {
  return (
    <div className="privacy-card">
      <div>
        <h3 className="privacy-title">{title}</h3>
        <p className="privacy-description">{description}</p>
      </div>
      <ArrowRight className="privacy-icon" />
    </div>
  );
};

export default Cards;
