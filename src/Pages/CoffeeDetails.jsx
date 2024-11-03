import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import coffeeImg from '../assets/nutrition.png';
import { addFavorite, getFavorites } from '../Utils';

const CoffeeDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [coffee, setCoffee] = useState({});
    const { image, name, popularity, rating, making_process, ingredients, nutrition_info } = coffee;
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id);
        setCoffee(singleData);
        const favorites = getFavorites();
        const isExist = favorites.find(item => item.id == singleData.id);
        if(isExist){
            setIsFavorite(true)
        }
    }, [data, id]);

    const handleFavorite = (coffee)=>{
        addFavorite(coffee);
        setIsFavorite(true)
    }
    return (
        <div>
            <img className='w-full h-[600px]' src={image} alt="" />
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl font-thin'>{name}</h2>
                    <p>Popularity: {popularity}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div>
                    <button disabled={isFavorite} onClick={()=>handleFavorite(coffee)} className='btn btn-warning'>Add Favorite</button>
                </div>
            </div>
            <p className='text-2xl font-thin mt-4'>Making Props:</p>
            <p>{making_process}</p>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-2xl font-thin mt-4'>Ingredients</p>
                    {ingredients && ingredients.map((item, i) => <li key={i}>{item}</li>)}
                    <p className='text-2xl font-thin mt-4'>Nutrition:</p>
                    {nutrition_info && Object.keys(nutrition_info).map((n, i) => <li key={i}> {n}: {nutrition_info[n]}</li>)}
                </div>
                <div>
                    <img className='w-full h-96' src={coffeeImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default CoffeeDetails;