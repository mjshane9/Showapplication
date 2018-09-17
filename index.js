import React from 'react';
import ReactDOM from 'react-dom';
import Show from './Shows';
var shows=require('./shows.json');


ReactDOM.render(
    <div>
    <Show show={shows[0]}/>
    <Show show={shows[1]}/>
    <Show show={shows[2]}/>
    </div>,
    document.getElementById('root')
);
