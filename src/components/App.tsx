import React, { useCallback } from "react";
import { Container } from "reactstrap";
import Banner from "./Banner";
import ExpenseForm, { IExpense } from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import useLocalStorage from "../hooks/useLocalStorage";
import { KEY } from "../constants";

const App: React.FC = () => {
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(KEY);

  const expenseSummary = useCallback((): number => {
    let result = 0;
    if (localStorageValue) {
      localStorageValue.forEach((item: IExpense) => {
        result += +item.amount;
      });
    }
    return result;
  }, [localStorageValue]);

  const onAdd = (data: IExpense) => {
    setLocalStorageValue(
      localStorageValue ? [...localStorageValue, data] : [data]
    );
  };
  const onDelete = (id: string) => {
    if (localStorageValue) {
      setLocalStorageValue(
        [...localStorageValue].filter((item: IExpense) => item.id !== id)
      );
    }
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Banner amount={expenseSummary()} />
      <ExpenseForm
        expenses={localStorageValue}
        onAdd={(data: IExpense) => onAdd(data)}
      />
      <ExpenseList
        expenses={localStorageValue}
        onDelete={(id: string) => onDelete(id)}
      />
    </Container>
  );
};

export default App;
