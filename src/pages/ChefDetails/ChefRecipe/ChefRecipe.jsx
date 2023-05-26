import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Rating, Star } from '@smastrom/react-rating';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefRecipe = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);

    const { recipeImg, recipeName, ingredients, cookingMethod, rating } = recipe;

    const handleFavorite = () => {
        setFavorite(true);
        toast.success(`${recipeName} has been added to your favorites!`);
    };

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9',
    };

    return (
        <div className="p-4 rounded-lg shadow-md bg-white flex flex-col justify-between">
            <div className="mb-2">
                <LazyLoadImage className='object-cover rounded-lg w-full h-48' src={recipeImg} alt={recipeName} />
            </div>
            <h2 className="text-xl font-semibold mb-2">{recipeName}</h2>
            <div className='mb-1'>
                <h4 className="text-base font-medium mb-1">Ingredients:</h4>
                <ul className="list-inside">
                    {ingredients.map((ingredient, _idx) => (
                        <li className='flex items-center gap-2 mb-1' key={_idx}><FaCheckCircle /> {ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className='mb-2'>
                <h4 className="text-base font-medium mb-1">Cooking Method:</h4>
                <p className="text-gray-700">{cookingMethod}</p>
            </div>
            <div className="flex justify-between items-center">
                <button
                    onClick={handleFavorite}
                    disabled={favorite}
                    className={`px-4 py-2 rounded-md ${favorite ? 'bg-gray-400 cursor-default' : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        } focus:outline-none`}
                >
                    Add to Favorites
                </button>

                <div className='flex items-center gap-2'>
                    <Rating style={{ maxWidth: 100 }} value={rating} itemStyles={myStyles} readOnly />
                    <span>{rating}</span>
                </div>

            </div>

            <ToastContainer />
        </div>
    );
};

export default ChefRecipe;
