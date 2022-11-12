import React from 'react';

export default function Member(props) {
    const { information } = props

    if (!information) {
        return <h4>Working on obtaining your data&apos; s information...</h4>
    }

    return (
        <div className='member container'>
            <h2>{information.memberName}</h2>
            <p>Email: {information.email}</p>
            <p>Role: {information.role}</p>

        </div>
    )
}