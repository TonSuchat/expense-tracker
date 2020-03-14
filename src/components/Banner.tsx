import React from "react";
import Logo from "../logo.svg";
import { Row, Col } from "reactstrap";
import TotalExpense from "./TotalExpense";

type BannerType = {
  amount: number;
};

const Banner: React.FC<BannerType> = props => {
  return (
    <Row>
      <Col className="banner">
        <h2>
          Expense Tracker React App
          <img src={Logo} alt="Expense Tracker" className="logo" />
        </h2>
        <TotalExpense amount={props.amount} />
      </Col>
    </Row>
  );
};

export default Banner;
