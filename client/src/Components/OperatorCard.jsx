import React from "react";
import "./Operator.css";

const OperatorCard = ({ operator }) => {
  return (
    <div className="operatorCard">
      <h1 className="operatorName">{operator.fullName}</h1>
      <div className="info-group">
        <label htmlFor="">Telefon:</label>
        <a className="operatorPhone" href={`tel:9${operator.phoneNumber}`}>
          {operator.phoneNumber}
        </a>
      </div>
      <div className="info-group">
        <label htmlFor="">Adres:</label>
        <address className="operatorAddress">
          {operator.city} / {operator.district}
        </address>
      </div>
    </div>
  );
};

export default OperatorCard;
