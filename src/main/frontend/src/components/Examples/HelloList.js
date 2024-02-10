import React from 'react';

function HelloList(data) {
    const items = data.map((item) =>
        <li>{item}</li>
    )

    return (
        <>
            <h2>Here's some data</h2>
            <ul>{items}</ul>
        </>
    );
}

export default HelloList;