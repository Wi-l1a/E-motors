import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className='loader_container'>
            <div className="loader">
                <div className="face">
                    <div className="circle"></div>
                </div>
                <div className="face">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;