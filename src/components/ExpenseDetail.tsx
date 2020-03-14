import React from "react";
import { IExpense } from "./ExpenseForm";
import { UncontrolledAlert } from "reactstrap";

type ExpenseDetail = {
  item: IExpense;
  onDelete: (id: string) => void;
};

const ExpenseDetail: React.FC<ExpenseDetail> = props => {
  return (
    <UncontrolledAlert
      color="secondary"
      onClick={() => props.onDelete(props.item.id)}
    >
      {props.item.expenseName} - $ {props.item.amount}
    </UncontrolledAlert>
  );
};

export default ExpenseDetail;
