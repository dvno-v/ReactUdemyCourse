import React from 'react';

export default function CharComponent({ click, char }) {
    return (
        <li onClick={click}>
            {char}
        </li>
    )
}