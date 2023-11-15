import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispact, Currency} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(Currency);
    const changeCurrency = (event) => {
        setNewCurrency(event.target.value);
    }
    
}