import { useState } from "react";
const useLocalStorage = (key: string): [any, (storageValue: any) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  });

  const setValue = (storageValue: any) => {
    try {
      setStoredValue(storageValue);
      window.localStorage.setItem(key, JSON.stringify(storageValue));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
