import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';


const Loader = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <ThreeCircles
                height="100"
                width="100"
                color="#EAB308"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
};

export default Loader;