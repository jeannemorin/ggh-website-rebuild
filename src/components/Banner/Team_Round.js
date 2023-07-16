import React from 'react';

const members = [
    {
        name: 'Jeanne Morin',
        photo: 'Jeanne',
        role: 'BURO | Présidente',
    },
    {
        name: 'Ronan Pédron',
        photo: 'Ronan',
        role: 'BURO | Vice président',
    },
    {
        name: 'Alexandre Lemonnier',
        photo: 'Alexandre',
        role: 'BURO | Trésorier',
    },
    {
        name: 'Tao Blancheton',
        photo: 'Tao',
        role: 'BURO | Secrétaire',
    },
]

const Team_Round = () => {

    return (
        <div>
            <div className="container mx-auto">
                <div>
                {members.map((member, index) =>  
                    <div>{member.name}</div>
                    )};
                </div>

            </div>
        </div>
    )
};

export default Team_Round;