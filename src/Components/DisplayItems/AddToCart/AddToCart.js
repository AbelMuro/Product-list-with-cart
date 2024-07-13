import React, {useState, useEffect} from 'react';
import Quantity from './Quantity';
import icons from './icons';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';

function AddToCart({item}){
    const [button, setButton] = useState(true);
    const currentItem = useSelector(state => state.cart.filter(currentItem => currentItem.name === item.name)[0]?.name);

    const handleButton = () => {
        setButton(!button);
    }

    useEffect(() => {
        if(!currentItem)
            setButton(true);
    }, [currentItem])


    return (
        <div className={styles.container}>
            <img className={styles.item_image} src={item.image.desktop} style={!button ? {border: '2px solid #C73B0F'} : {}}/>
            {button ?                            
                <button className={styles.addToCart} onClick={handleButton}>
                    <img src={icons['cart']}/>
                    Add to Cart
                </button> : 
                <Quantity item={item} setButton={setButton}/>
            }         
        </div>
    )
    
}

export default AddToCart;