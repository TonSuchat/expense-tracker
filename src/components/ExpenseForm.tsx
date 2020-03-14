import React, { useState, useRef, useEffect } from "react";
import {
  FormGroup,
  Button,
  Label,
  Input,
  Row,
  Col,
  Alert,
  Form
} from "reactstrap";
import { v4 as uuid } from "uuid";

export interface IExpense {
  id: string;
  expenseName: string;
  amount: number;
}

type ExpenseFormType = {
  expenses: IExpense[];
  onAdd: (data: IExpense) => void;
};

const initialValue: IExpense = {
  id: uuid(),
  expenseName: "",
  amount: 0
};

const ExpenseForm: React.FC<ExpenseFormType> = props => {
  const [data, setData] = useState<IExpense>(initialValue);
  const [error, setError] = useState<null | string>(null);
  const expenseNameInputRef = useRef<any>(null);

  useEffect(() => {
    if (expenseNameInputRef && expenseNameInputRef.current)
      expenseNameInputRef.current.focus();
  }, [expenseNameInputRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.expenseName || data.amount <= 0) {
      setError("Data is invalid.");
    } else {
      props.onAdd(data);
      setData({ ...initialValue, id: uuid() });
      if (expenseNameInputRef && expenseNameInputRef.current)
        expenseNameInputRef.current.focus();
    }
  };

  return (
    <Row>
      <Col md="6">
        {error && <Alert color="danger">{error}</Alert>}
        <Form onSubmit={e => onAdd(e)}>
          <FormGroup>
            <Label>Name of Expense</Label>
            <Input
              type="text"
              name="expenseName"
              placeholder="Enter you expense name"
              onChange={e => handleChange(e)}
              value={data.expenseName}
              innerRef={expenseNameInputRef}
            />
          </FormGroup>
          <FormGroup>
            <Label>$ Amount</Label>
            <Input
              type="number"
              name="amount"
              placeholder="0.00"
              onChange={e => handleChange(e)}
              value={data.amount}
            />
          </FormGroup>
          <Button type="submit" color="primary">
            Add
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ExpenseForm;
