import React, { useState } from 'react';
import icons from '../assets/icons';

const Carousel = () => {

    const [chevronLeft, setChevronLeft] = useState(false);
    const [chevronRight, setChevronRight] = useState(false);
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

    const scrollHandler = (scrollDirection) => {
        if (scrollDirection === "right") {
            if (test1.length > divOnScreen) {
                console.log("right");
                setDivOnScreen(divOnScreen + 3);
            }
            else {
                setDivOnScreen(test1.length);
            }
        }

        if (scrollDirection === "left") {
            if (divOnScreen > 0) {
                console.log("left");
                setDivOnScreen(divOnScreen - 3);
            }
        }
    };

    return (
        <div className='relative'>
            <div className='flex items-center overflow-scroll scroll-smooth'
                id='scrollElement'
            >
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
            </div>
            {
                chevronRight &&
                <span className='absolute left-0 top-0 z-10 h-full flex justify-start items-center w-10 rounded bg-gradient-to-r from-white cursor-pointer' onClick={() => setChevronLeft(!chevronLeft)}>{icons.chevron_left}</span>
            }
            <a href={`#${divOnScreen}`} onClick={() => scrollHandler("right")}>

                <span className='absolute right-0 top-0 z-10 h-full flex justify-start items-center w-10 rounded bg-gradient-to-l from-white cursor-pointer' onClick={() => setChevronRight(!chevronRight)}>{icons.chevron_right}</span>
            </a>
            {console.log('div', divOnScreen)}
        </div>
    );
};

export default Carousel;