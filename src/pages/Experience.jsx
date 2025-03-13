import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Company 1',
            duration: '2020-2021',
            description: 'IT Support',
        },
        {
            company: 'Company 2',
            duration: '2021-2022',
            description: 'Auto Cad',
        },  
        {
            company: 'Company 3',
            duration: '2022-2023',
            description: 'Web Design',
        },
        {
            company: 'Company 4',
            duration: '2023-2024',
            description: 'Hardware & Software',
        },
    ]

    return (
        <div className='max-w-[1300px] mx-auto px-4 py-8 relative'>
            <div className='absolute w-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10 h-full left-1/2'></div>
            {experiences.map((exp, index) =>(
                <div className={`flex ${index % 2 === 0 ? 'justify-start pl-4' : 'justify-end pr-4'} my-8`} key={index}>
                    <div className='bg-gradient-to-t from-[#f794a4] to-[#fdd6bd] p-4 rounded-lg shadow-md w-[45%] shadow-xl overflow-hidden'>
                       <p className='font-bold text-lg'>{exp.company}</p>
                       <p className='text-gray-700'>{exp.duration}</p>
                       <p className='mt-2'>{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
