import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact Me</p>
                    <p className='mt-6'>Contact Details:</p>
                </div>

                <div className='flex flex-col md:flex-row md:gap-9'>
                    <div className='md:w-1/2'>
                        <h2 className='text-xl font-semibold mb-2'>Address</h2>
                        <p>Electronic city</p>
                        <p>Bengaluru, Karnataka 560068
</p>
                    </div>
                    <div className='md:w-1/2 mt-4 md:mt-0'>
                        <h2 className='text-xl font-semibold mb-2'>Email</h2>
                        <p>amalfrancis744@gmail.com</p>
                    </div>
                    <div className='md:w-1/2 mt-4 md:mt-0'>
                        <h2 className='text-xl font-semibold mb-2'>Phone</h2>
                        <p>8075392424</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;
