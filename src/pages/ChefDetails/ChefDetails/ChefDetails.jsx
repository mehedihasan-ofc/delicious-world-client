import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import ChefRecipe from '../ChefRecipe/ChefRecipe';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../../providers/AuthProvider';

const ChefDetails = () => {

    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        setPreloader(false);
    }

    const { id } = useParams();
    const [chef, setChef] = useState({});
    const { setPreloader } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://delicious-world-server-mehedihasan-ofc.vercel.app/chef/${id}`)
            .then(res => res.json())
            .then(data => {
                setChef(data);
                setPreloader(false);
            })
            .catch(err => {
                setPreloader(false);
            })
    }, [])

    const { chefPicture, chefName, chefDescription, likes, numberOfRecipes, yearsOfExperience, recipes } = chef;

    return (
        <div className='my-container'>
            {/* Chef Banner */}

            <div className='border-b border-gray-300 py-5'>
                <div className='grid grid-cols-2 items-center gap-20'>
                    <div>
                        <h2 className='text-4xl font-medium'>{chefName}</h2>
                        <p className='text-lg my-5'>{chefDescription}</p>

                        <div className='grid grid-cols-3 divide-x-2'>
                            <div className='text-center'>
                                <h4 className='text-2xl'>{yearsOfExperience}</h4>
                                <p className='text-lg'>Experience</p>
                            </div>
                            <div className='text-center'>
                                <h4 className='text-2xl'>{numberOfRecipes}</h4>
                                <p className='text-lg'>Recipies</p>
                            </div>
                            <div className='text-center'>
                                <h4 className='text-2xl'>{likes}</h4>
                                <p className='text-lg'>Like</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <LazyLoadImage effect="blur" className='rounded-lg' src={chefPicture} alt="" />
                    </div>
                </div>
            </div>

            {/* Chef Recipes */}
            <div className='my-14'>
                <div className='text-center'>
                    <h2 className='font-merriweather font-extrabold text-xl md:text-3xl'>Recipes</h2>
                    <p className='mt-2 mb-5'>what can be better then food prepared with love</p>
                </div>

                <div className='grid grid-cols-3 gap-10'>
                    {
                        recipes?.map(recipe => <ChefRecipe
                            key={recipe.id}
                            recipe={recipe}
                        ></ChefRecipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;