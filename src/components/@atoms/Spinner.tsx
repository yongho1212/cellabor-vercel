// @flow
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';

type SpinnerProps = {
    isLoading : boolean;
}

const Spinner = ({isLoading} : SpinnerProps) => {

    if (!isLoading) {
        return null;
    }

    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
            <PropagateLoader
                color={'#000'}
                // loading={loading}
            />
        </div>,
        document.body
    );
};

export default Spinner;
