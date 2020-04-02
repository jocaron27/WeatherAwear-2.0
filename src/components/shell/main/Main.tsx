import React from 'react';
import * as PropTypes from '../PropTypes';

const Main: React.FC = (props: PropTypes.MainProps) => {
    const { children } = props;

    return (
        <div>
            { children }
        </div>
    );
}

export default Main;
