import React from 'react';

export default function FancyDiv(props) {
    return (
        <div style={{
            background: props.background,
            border: props.border
            // color: props.color
        }}>
            {props.children}
        </div>
    )
};
