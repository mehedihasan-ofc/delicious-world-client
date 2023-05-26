import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefCard = ({ chef }) => {

    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    const navigate = useNavigate();

    return (
        <div className="card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-xl">
            <figure><LazyLoadImage effect="blur" src={chefPicture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {chefName}
                </h2>
                <p>Experience: {yearsOfExperience}</p>
                <p>Recipes: {numberOfRecipes}</p>
                <p>Likes: {likes}</p>
                <div className="card-actions mt-2">
                    <button onClick={() => navigate(`/chef/${id}`)} className="btn-custom">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;