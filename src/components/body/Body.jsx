import React, { useEffect, useState } from 'react';
import Card from './Card';

const Body = () => {
    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-masumpost.vercel.app/chefscard')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4 className='text-center text-4xl font-bold my-8'>Displayed Chef's</h4>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 justify-center mx-3'>
           {
                chefs.map(chef =><Card
                    key={chef.id}
                    chef ={chef}
                ></Card> )
            }
           </div>
        </div>
    );
};

export default Body;