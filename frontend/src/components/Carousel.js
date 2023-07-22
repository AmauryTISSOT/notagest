import React, { useState } from 'react';
import icons from '../assets/icons';

const Carousel = () => {
    const [divOnScreen, setDivOnScreen] = useState(Math.floor(window.innerWidth / 208));

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


    const scrollToEnd = (scrollDirection) => {
        if (scrollDirection === "right") {
            setDivOnScreen(test1.length - 1);
        }

        if (scrollDirection === "left") {
            setDivOnScreen(1);
        }
    };

    return (
        <div className='relative'>

            <div className='flex items-center overflow-scroll scroll-smooth'
                id='scrollElement'
            >
                <a href={`#${divOnScreen}`} onClick={() => scrollToEnd("left")}>
                    <span className='absolute left-0 top-0 h-full flex justify-start items-center w-10 rounded bg-gradient-to-r from-white cursor-pointer'>{icons.chevron_left}</span>
                </a>
                {test1.map((item, index) => {
                    return (
                        <div className='bg-slate-200 flex flex-col p-1 m-1 rounded min-w-[200px]'
                            key={index}
                            id={index}>
                            {item.status ?
                                <span>{icons.check_circle}</span> :
                                <span>{icons.arrow_right_circle}</span>}
                            <p className=''>{item.name}</p>
                            <p className='text-sm font-medium'>{item.date}</p>
                        </div>
                    );
                })}
                <a href={`#${divOnScreen}`} onClick={() => scrollToEnd("right")}>
                    <span className='absolute right-0 top-0 z-10 h-full flex justify-start items-center w-10 rounded bg-gradient-to-l from-white cursor-pointer'>{icons.chevron_right}</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;