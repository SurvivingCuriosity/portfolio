// import { useCallback, useState } from "react";

// export const useLocalStorage = (key: string, initialValue: string): [string, (value: string) => void] => {
//     const [storedValue, setStoredValue] = useState<string>(() => {
//       try {
//         const item = window.localStorage.getItem(key);
//         return item ? JSON.parse(item) : initialValue;
//       } catch (error) {
//         console.error(error);
//         return initialValue;
//       }
//     });
  
//     const setValue = useCallback(
//       (value: string) => {
//         try {
//           const valueToStore = value instanceof Function ? value(storedValue) : value;
//           setStoredValue(valueToStore);
//           window.localStorage.setItem(key, JSON.stringify(valueToStore));
//         } catch (error) {
//           console.error(error);
//         }
//       },
//       [key, storedValue]
//     );
  
//     return [storedValue, setValue];
//   }