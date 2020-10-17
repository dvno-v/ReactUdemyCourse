import React from 'react';

export default function UserInput({ username, changeUserNameHandler }) {
    return (
        <input onChange={changeUserNameHandler} value={username} defaultValue={username}></input>
    )
}