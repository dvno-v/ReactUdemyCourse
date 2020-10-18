import React from 'react';


export default function ValidationTextComponent({ textLength }) {
    return (
        <p>{textLength >= 5 ? 'Text long enough' : 'Text too short' }</p>
    )
}