import React from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';

const projects = [
    {img: p1, title: 'Project 1', description: 'Simple Responsive Navbar'},
    {img: p2, title: 'Project 2', description: 'Laravel vitejs'},
    {img: p3, title: 'Project 3', description: 'Amazonweb-demo'},
    {img: p4, title: 'Project 4', description: 'Todo List'},
]

const ProjectCard = ({projects}) => {
    return (
        <div className='rounded-xl bg-green-100 overflow-hidden shadow-lg z-10 transform transition duration-300 hover:scale-105'>
            <a href="#" className='block overflow-hidden'>
                <img 
                    src={projects.img} 
                    alt={projects.title}
                    className='w-full h-[300px] object-contain bg-white rounded-xl' 
                />
            </a>
            <div className='p-4 text-black'>
                <h3 className='text-xl font-bold'>{projects.title}</h3>
                <p className='mt-2'>{projects.description}</p>
            </div>
        </div>
    )
}

const Portforlio = () => {
    return (
        <div className='max-w-[1300px] mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {projects.map((project,index) => (
                    <ProjectCard key={index} projects={project} />
                ))}
            </div>
        </div>
    );
};

export default Portforlio;
