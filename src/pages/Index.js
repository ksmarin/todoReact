import React from 'react';
import {Provider} from 'react-redux'
import store from './../redux/store';




import Home from './Home'

 export default function Index() {
    return (
        <div>
            <Provider store={store}>
                <Home/>
            </Provider>
        </div>
    )
}
