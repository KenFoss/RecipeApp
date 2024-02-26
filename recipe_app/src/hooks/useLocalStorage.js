import {useState, useEffect} from 'react';

const useLocalStorage = ({ itemKey, defaultData }) => {
  // Initialize state using a function to read from local storage
  const [data, setData] = useState(() => {
      const storedData = localStorage.getItem(itemKey);
      if (storedData) {
        return JSON.parse(storedData)
      } else {
        localStorage.setItem(itemKey, JSON.stringify(defaultData));
        return defaultData
      } 
  });

  useEffect(() => {
    localStorage.setItem(itemKey, JSON.stringify(data));
  }, [data, itemKey]);

  return [data, setData];
}

export default useLocalStorage;