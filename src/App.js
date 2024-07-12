import React from 'react';
import DisplayItems from './Components/DisplayItems';
import {Provider} from 'react-redux';
import store from './Store';
import './styles.css';

function App(){
    return(
        <Provider store={store}>
            <DisplayItems/>
        </Provider>
    )
}

export default App;