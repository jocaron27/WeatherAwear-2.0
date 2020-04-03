import React from 'react';
import {shell} from '../shell';

const Main: React.FC = (props: shell.MainProps) => {
    const { children } = props;

    return (
        <div>
            { children }
        </div>
    );
}

export default Main;
