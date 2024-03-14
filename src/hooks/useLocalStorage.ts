import { useState } from 'react';

type StorageAction<T> = (value: T) => void;

interface UseLocalStorageProps<T> {
  key: string;
  initialValue: T;
}

export const useLocalStorage = <T>({ key, initialValue }: UseLocalStorageProps<T>) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initial);

  const setStoredValue: StorageAction<T> = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeStoredValue = () => {
    setValue(initialValue);
    localStorage.removeItem(key);
  };

  return { value, setValue: setStoredValue, removeValue: removeStoredValue };
};
