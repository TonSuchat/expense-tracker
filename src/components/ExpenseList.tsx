import React from "react";
import ExpenseDetail from "./ExpenseDetail";
import { IExpense } from "./ExpenseForm";
import { Row, Col } from "reactstrap";

type ExpenseListType = {
  expenses: IExpense[];
  onDelete: (id: string) => void;
};

const ExpenseList: React.FC<ExpenseListType> = props => {
  return (
    <Row className="mt-3">
      <Col>
        {props &&
          props.expenses &&
          props.expenses.length > 0 &&
          props.expenses.map((item: IExpense, index: number) => (
            <ExpenseDetail
              key={item.id}
              item={item}
              onDelete={props.onDelete}
            />
          ))}
      </Col>
    </Row>
  );
};

export default ExpenseList;
