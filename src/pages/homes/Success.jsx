import React from 'react';
import { FaBagShopping, FaChessKing, FaClipboardUser, FaClock } from 'react-icons/fa6';

const Success = () => {
    return (
        <section className='success-container'>
            <div className='md:ps-20'>
                <FaBagShopping className='text-secondary text-3xl' />
                <h2 className='font-bold text-5xl pt-4'>2+</h2>
                <p className='text-xl font-medium'>Years Of Exp.</p>
            </div>
            <div className='md:ps-20'>
                <FaChessKing className='text-secondary text-3xl'/>
                <h2 className='font-bold text-5xl pt-4'>20+</h2>
                <p className='text-xl font-medium'>Completed Project</p>
            </div>
            <div className='md:ps-20'>
                <FaClipboardUser className='text-secondary text-3xl'/>
                <h2 className='font-bold text-5xl pt-4'>5+</h2>
                <p className='text-xl font-medium'>Happy Clients</p>
            </div>
            <div className='md:ps-20'>
                <FaClock className='text-secondary text-3xl'/>
                <h2 className='font-bold text-5xl pt-4'>24hrs</h2>
                <p className='text-xl font-medium'>Available</p>
            </div>
        </section>
    );
};

export default Success;