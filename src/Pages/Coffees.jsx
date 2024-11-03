import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';

const Coffees = () => {
    const coffees = useLoaderData();
    const [coffee, setCoffee] = useState(coffees);
    const handleSort = (sortBy) => {
        if (sortBy === 'popularity') {
            const sorted = [...coffees].sort((a, b) => b.popularity - a.popularity);
            setCoffee(sorted);
        } else if (sortBy === 'rating') {
            const sorted = [...coffees].sort((a, b) => b.rating - a.rating);
            setCoffee(sorted);
        }
    }
    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-3xl font-thin'>Sort Coffee&apos;s by Popular & Rating-&gt;</h2>
                </div>
                <div className='space-x-4'>
                    <button onClick={() => handleSort('popularity')} className='btn btn-warning'>Sort by popularity</button>
                    <button onClick={() => handleSort('rating')} className='btn btn-warning'>Sort by Rating</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8'>
                {
                    coffee.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;