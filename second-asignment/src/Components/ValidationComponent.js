import React from 'react';

const ValidationComponent = (props) => {
    let displayText = `The text is long enough. Text length: ` + props.textLength;

    if(props.textLength < 5) {
        displayText = `The text is too short!!! Text length: ` + props.textLength;
    }

    return(
        <div className="validationCompontent">
            {displayText}
        </div>
    );
}

export default ValidationComponent;