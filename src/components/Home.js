import React from 'react';
import ProductCard from "./ProductCard";
import './sampledata'

const Home = () => {
    const data = [
        {
            "name": "fefref",
            "price": 3.4,
            "description": "edwfrf"
        },
        {
            "name": "frfjkbekrfb",
            "price": 10.4,
            "description": "lolololol"
        },
        {
            "name": "dadadad",
            "price": 20,
            "description": "fwef"
        }

    ]

    return (
        <div className='product-container'>
            {data.map((d) => {
                return(
                <ProductCard
                name={d.name}
                price={d.price}
                description={d.description}
                product={d}
                />
                )
            })}
        </div>

    )
}

export default Home