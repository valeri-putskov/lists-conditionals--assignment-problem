import React from 'react';

const validationComponent = (props) => {
    let validationText = props.textValue.length > 5 ? 'Text long enough' : 'Text too short';
    return (
        <p>{validationText}</p>
    )
};

export default validationComponent;