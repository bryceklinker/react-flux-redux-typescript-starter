import * as React from 'react';
import { Link } from 'react-router';

export const HomePage = (prpos) => {
    return (
        <div>
            <h1>Pluralsight Administration</h1>
            <p>React, Redux, and React Router in typescript for ultra-responsive web apps.</p>
            <Link to="about">Learn more</Link>
        </div>
    );
};
