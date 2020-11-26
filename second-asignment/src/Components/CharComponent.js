import React from 'react';

import './Components.css';

const CharComponent = (props) => {
    return(
        <div className="charComponent" onClick={props.click}>
            <p>{props.character}</p>
        </div>
    );
}

export default CharComponent;