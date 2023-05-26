import React, { useContext, useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { AuthContext } from '../../../providers/AuthProvider';

const ChefList = () => {

    const [chefs, setChefs] = useState([]);
    const { setPreloader } = useContext(AuthContext);

    useEffect(() => {

        fetch('https://delicious-world-server-mehedihasan-ofc.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setPreloader(false);
            })

    }, [])

    return (
        <div className='my-container my-20'>
            <div className='text-center mb-5'>
                <h2 className='font-merriweather font-extrabold text-xl md:text-3xl'>Our Awesome Chef's</h2>
                <p className='mt-2 mb-5'>what can be better then food prepared with love</p>
            </div>

            <div className='md:grid grid-cols-3 gap-5'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefList;