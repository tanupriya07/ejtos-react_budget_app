import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    console.log("new currency",newCurrency," ", currency);
    const changeCurrency = (event) => {
        setNewCurrency(event.target.value);
        console.log("In Change Currency",event.target.value);
        dispatch ({
            type:'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span style={{ marginRight: '2rem' }}>Currency:</span> 
            <select name="Currency" id="Currency" defaultValue={currency} onChange={changeCurrency} style={{width: '10rem', border: 'none'}}>
                <option value='$'>Dolar $</option>
                <option value='₹'>Ruppee ₹</option>
                <option value='£'>Pound £</option>
                <option value='€'>Euro €</option>
            </select>

        </div>
    );
    
}

export default Currency;