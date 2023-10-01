import React from 'react'

import PropTypes from 'prop-types';




const Projects = ({projects, themes}) => {

    let i = 0;

    // Function to increment i by 1
    const incrementCount = () => {
        i = i+1
    };

    return (<section id="projects" className=''>
        <div className='container mx-auto'>
            {themes.map( theme => 
                <div className='flex flex-col gap-y-10'>
                    <h1 className='h1'>Thème : {theme.name}</h1>
                    <div className='flex flex-col gap-y-16'>
                        {projects[i].map(project => 
                            <Project name={project.name} image={project.image} content={project.content} />)
                        }
                        </div>
                    {incrementCount()}
                </div>
            )}
        </div>
    </section>)
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    theme: PropTypes.array.isRequired
}

export default Projects;

const Project = ({name, image, content, podium}) => {

    return (
        <div className='flex flex-row h-[120px] gap-x-10'>
            <img src={image} alt="" />
            <div className='flex flex-col'>
                <h3 className='h3 mb-1'>{name}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    podium: PropTypes.string
}
