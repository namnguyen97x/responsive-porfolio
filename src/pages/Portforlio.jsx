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
        <div className='rounded bg-green-100 overflow-hidden shadow-lg z-10 transform transition duration-300 hover:scale-105'>
            <a href="#" className='block col-span-3 overflow-hidden'>
                <img src={projects.img} className='h-[300px] w-full object-cover object-top rounded-t-lg' />
            </a>
            <div className='p-4 text-black mb-3 mr-3'>
                <h3 className='text-xl font-bold'>{projects.title}</h3>
                <p className='mt-2'>{projects.description}</p>
            </div>
        </div>
    )
}
const Portforlio = () => {
    return (
        <div className='max-w-[1300px] mx-auto px-4 py-8 md:grid md:grid-cols-2 gap-4'>
                {projects.map((project,index) => (
                    <ProjectCard key={index} projects={project} />
                ))
                }
        </div>
    );
};

export default Portforlio;
