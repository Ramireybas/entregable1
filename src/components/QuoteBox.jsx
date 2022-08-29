import React, { useState } from 'react';


const quoteBox = ({ props}) => {
    return (
       <p style={`${props.color}`}>{props.author}</p>
    );
};

export default quoteBox;