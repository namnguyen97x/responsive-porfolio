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
        <div className='max-w-[1300px] mx-auto px-4 py-8'>
            <div className='relative'>
                {/* Desktop Timeline Line */}
                <div className='hidden md:block absolute w-2 bg-gradient-to-r from-blue-500 to-purple-500 h-full left-1/2 -translate-x-1/2'></div>
                
                {/* Experience Items */}
                <div className='space-y-6'>
                    {experiences.map((exp, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Content Box */}
                            <div className='w-full md:w-[45%]'>
                                <div className='bg-gradient-to-t from-[#f794a4] to-[#fdd6bd] p-4 rounded-lg shadow-md shadow-xl overflow-hidden'>
                                    <p className='font-bold text-lg'>{exp.company}</p>
                                    <p className='text-gray-700'>{exp.duration}</p>
                                    <p className='mt-2'>{exp.description}</p>
                                </div>
                            </div>

                            {/* Timeline Dot - Hidden on Mobile */}
                            <div className='hidden md:flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full shadow-xl z-20'>
                                <div className='w-2 h-2 bg-white rounded-full'></div>
                            </div>

                            {/* Empty Space for Desktop Layout */}
                            <div className='hidden md:block w-[45%]'></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
