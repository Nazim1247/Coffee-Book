import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
           {/* banner */}
           <Banner></Banner>
           {/* heading */}
           <Heading title={'Browse Coffees by Categories'} subTitle={'this is subtitle this is subtitle this is subtitle this is subtitle this is subtitle'}></Heading>
           {/* categories */}
           <Categories categories={categories}></Categories>
           {/* dynamic nested component */}
           <Outlet></Outlet>
        </div>
    );
};

export default Home;