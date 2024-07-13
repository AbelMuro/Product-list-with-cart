import React from 'react';
import DisplayItems from './Components/DisplayItems';
import Cart from './Components/Cart';
import {Provider} from 'react-redux';
import store from './Store';
import './styles.css';

//i will need to work on the responsiveness to tablet

function App(){
    return(
        <Provider store={store}>
            <main className={'container'}>
                <DisplayItems/>  
                <Cart/>              
            </main>
        </Provider>
    )
}

export default App;