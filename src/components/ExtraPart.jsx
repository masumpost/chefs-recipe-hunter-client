import React from 'react';
import moment from 'moment';
const ExtraPart = () => {
    return (
        <div className='md:flex justify-between my-4 px-4'>
            <div className='flex gap-4 items-center'>
                <div>
                    <h4 className='text-2xl font-semibold'>Top Rated Countries Chefs:</h4>
                </div>
                <div>
                    <ul className='gap-4'>
                    <li className='my-2'><img src="bangladesh.png" alt="" /></li>
                    <li className='my-2'> <img src="china.png" alt="" /></li>
                    <li className='my-2'> <img src="india.jpg" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className='md:flex items-center gap-3'>
                <div>
                    <h4 className='text-2xl font-semibold'>Most popular recipe <small>[hover on img]</small></h4>
                </div>
                <div className='md:flex gap-4'>
                    <img src="butter.jpg" alt="" title='get the best quality butter'/>
                    <img src="bread.jpg" alt="" title='wow so testy bread'/>
                    <img src="salad.jpg" alt="" title='test the world class salad' />
                </div>
            </div>
        </div>
    );
};

export default ExtraPart;