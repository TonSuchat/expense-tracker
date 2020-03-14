import React from "react";

type TotalExpenseProps = {
  amount: number;
};

const TotalExpense: React.FC<TotalExpenseProps> = props => {
  return (
    <p>
      Total Expense: <span className="expense">${props.amount}</span>
    </p>
  );
};

export default TotalExpense;
