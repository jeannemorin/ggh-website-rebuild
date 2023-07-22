import React from 'react';

const Team_Round = ({members}) => {

    return (
        <div className='py-12'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 gap-y-10 lg:grid-cols-4'>

                    {members.map((member, index) => {  
                        return (<div className='flex flex-col items-center justify-center' key={index}>
                            <img src={member.photo} alt='' className='w-[160px]'/>
                            <h3 className='text-blue font-bold font-special py-4'>{member.name}</h3>
                            <h3>{member.role}</h3>
                        </div>)
                        })}
                </div>

            </div>
        </div>
    )
};

export default Team_Round;