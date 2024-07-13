import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './styles.module.css';

function Quantity({item,setButton}) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleDecrement = () => { 
        setQuantity(quantity - 1);
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }

    useEffect(() => {
        if(!quantity){
            dispatch({
                type: 'REMOVE_ITEM',
                item: {
                    name: item.name
                }
            });
            setButton(true)            
        }
        else
            dispatch({
                type: 'UPDATE_ITEM',
                item: {
                    name: item.name,
                    quantity
                }
            })
    }, [quantity])

    useEffect(() => {
        dispatch({type: 'ADD_ITEM', item: {
            name: item.name,
            quantity: 1,
            price: item.price,
            thumbnail: item.image.thumbnail
        }})
    }, [])

    return(
        <div className={styles.quantity}>
            <button onClick={handleDecrement}>
                <div className={styles.minus}/>
            </button>
            {quantity}
            <button onClick={handleIncrement}>
                <div className={styles.plus}/>
            </button>
        </div>
    )
}

export default Quantity;