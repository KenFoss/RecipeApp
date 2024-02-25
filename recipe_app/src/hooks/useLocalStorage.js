import {useState} from 'react';

const useLocalStorage = ({itemKey}) => {
    const [data, setData] = useState();


    // on instantiation of object check if data in localstorage
    
    if(localStorage.getItem(itemKey) !== null) {
        console.log(localStorage.getItem(itemKey))
        setData(JSON.parse(localStorage.get(itemKey)));
    }

    const setLocalStorage = (itemValue) => {
        setData(itemValue);
        localStorage.setItem(itemKey, JSON.stringify(itemValue));
    }

    return[data, setLocalStorage];
}

export default useLocalStorage;