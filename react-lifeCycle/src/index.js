import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
// import Shirt from './Attribute-transfer';
// import LightningCounterDisplay from './State';
// import Lifecycle from './Lifescycle';
// import CountParent from './Count';
import Colorizer from './ControlDom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        {/* <Card color={"red"}/> */}
        {/* <Shirt color="deepbule" num="3.14" size="medium"/>*/}     
        {/* <LightningCounterDisplay /> */}
        {/* <Lifecycle dom="container"/> */}
        {/* <CountParent/> */}
        <Colorizer/>
    </div>  
    , document.getElementById('container')
);
registerServiceWorker();