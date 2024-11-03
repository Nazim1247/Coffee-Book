import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import { getFavorites, removeFavorite } from '../Utils';
import Card from '../Components/Card';


const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const favorites = getFavorites();
        setCoffees(favorites);
    }, []);

    const handleRemove = (id)=>{
        removeFavorite(id);
        const favorites = getFavorites();
        setCoffees(favorites);
    }
    return (
        <>
            <Heading title="Welcome to Dashboard" subTitle="This is Dashboard This is Dashboard This is Dashboard This is Dashboard"></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8'>
                {
                    coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Dashboard;