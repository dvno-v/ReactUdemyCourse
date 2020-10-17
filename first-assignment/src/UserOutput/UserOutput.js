import React from 'react';

export default function UserOutput({ username }) {
    return (
        <div style={{
            border:'1px solid #eee',
            width: '40%',
            overflow:'auto'
        }}>
            <h1>
                Username:
                {username}
            </h1>
            <p>
                this is paragraph 1
            </p>
            <p>
                this is paragraph 2
            </p>
        </div>
    )
}