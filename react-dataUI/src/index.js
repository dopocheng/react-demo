import React from 'react';
import ReactDOM from 'react-dom';
import Showcircles from './Showcircles';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
    <Showcircles /> ,
    document.getElementById('root'));
registerServiceWorker();