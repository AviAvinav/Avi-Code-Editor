import React from 'react';
import './BottomPane.css';

function BottomPane({ srcDoc }) {
    return (
        <div className="BottomPane">
            <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
        </div>
    )
};

export default BottomPane;
