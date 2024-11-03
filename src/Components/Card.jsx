import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";

const Card = ({ coffee, handleRemove }) => {
    const { pathname } = useLocation();
    console.log(pathname)
    const { id, name, image, category, origin, type, rating, popularity } = coffee || {};
    return (
        <div className='relative'>
            <Link to={`/coffee/${id}`}>
                <div className="card bg-base-100 border-2">
                    <figure className="">
                        <img
                            src={image}
                            alt=""
                            className="w-full h-56" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Category: {category}</p>
                        <p>Type: {type}</p>
                        <p>Origin: {origin}</p>
                        <p>Rating: {rating}</p>
                        <p>Popular: {popularity}</p>
                    </div>
                </div>
            </Link>
            {
                pathname === '/dashboard' && (
                <div onClick={()=>handleRemove(id)} className='absolute -top-5 -right-5 text-xl p-2 rounded-full bg-warning cursor-pointer'>
                    <MdDeleteForever />
                </div>)
            }
        </div>

    );
};

export default Card;