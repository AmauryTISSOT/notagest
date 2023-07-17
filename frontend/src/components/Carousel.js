import React from 'react';
import icons from '../assets/icons';

const Carousel = () => {

    const test1 = [
        {
            name: "Ouverture du dossier",
            date: "25/11/2016",
            status: true,
        }, {
            name: "Avant-contrat",
            date: "25/11/2016",
            status: false,
        }, {
            name: "EHF",
            date: "25/11/2016",
            status: false,
        }, {
            name: "Ouverture du dossier",
            date: "25/11/2016",
            status: true,
        }, {
            name: "Avant-contrat",
            date: "25/11/2016",
            status: false,
        }, {
            name: "EHF",
            date: "25/11/2016",
            status: false,
        }, {
            name: "Ouverture du dossier",
            date: "25/11/2016",
            status: true,
        }, {
            name: "Avant-contrat",
            date: "25/11/2016",
            status: false,
        }, {
            name: "EHF",
            date: "25/11/2016",
            status: false,
        }, {
            name: "EHF",
            date: "25/11/2016",
            status: false,
        },
    ];

    //TODO: create a carrousel to access div outside window
    // the div on the right or left should have a fading effect and an arrow to move the carousel
    // when clicking on the element div should open a windows with a form to check the element or add a date
    // create a button to create a new element

    return (
        <div className='flex'>{test1.map((item, index) => {
            return (
                <div className='bg-slate-100 flex flex-col p-1 m-1 w-[200px] rounded' key={index}>
                    {item.status ?
                        <span>{icons.check_circle}</span> :
                        <span>{icons.arrow_right_circle}</span>}
                    <p className=''>{item.name}</p>
                    <p className='text-sm font-medium'>{item.date}</p>
                </div>
            );
        })}</div>
    );
};

export default Carousel;